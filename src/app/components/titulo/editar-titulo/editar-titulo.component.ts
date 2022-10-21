import { Component, OnInit } from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {Diretor} from "../../diretor/models/diretor";
import {Ator} from "../../ator/models/ator";
import {Classe} from "../../classe/models/classe";
import {DiretorService} from "../../diretor/services/diretor.service";
import {AtorService} from "../../ator/services/ator.service";
import {ClasseService} from "../../classe/services/classe.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {TituloService} from "../services/titulo.service";
import {Titulo} from "../models/titulo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-titulo',
  templateUrl: './editar-titulo.component.html',
  styleUrls: ['./editar-titulo.component.scss']
})
export class EditarTituloComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome: [''],
    ano: [''],
    sinopse: [''],
    categoria: [''],
    atores: this.formBuilder.array(<Ator[]>[]),
    diretor: [<Diretor>{}],
    classe: [<Classe>{}]
  });

  diretores: Diretor[] = [];
  atores: Ator[] = [];
  classes:Classe[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private tituloService: TituloService,
    private diretorService: DiretorService,
    private atorService: AtorService,
    private classeService: ClasseService,
    private snackBar: MatSnackBar,
    private location: Location,

  ) { }

  ngOnInit(): void {

    this.diretorService.list().subscribe(diretores =>{
      this.diretores = diretores;
    });

    this.classeService.list().subscribe(classes =>{
      this.classes = classes;
    });

    this.atorService.list().subscribe(atores =>{
      this.atores = atores;
    });

    const titulo: Titulo = this.route.snapshot.data['titulo'];
    console.log(titulo);

    this.form.patchValue({
      _id: titulo._id,
      nome: titulo.nome,
      ano: titulo.ano,
      sinopse: titulo.sinopse,
      categoria: titulo.categoria,
      atores: titulo.atores,
      diretor: titulo.diretor,
      classe: titulo.classe

    });
  }

  editarTitulo(): void{
    this.tituloService.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Título cadastrado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao cadastrar título.", '', {duration: 5000});
  }

}





/*
import { Component, OnInit } from '@angular/core';
import {FormGroup, NonNullableFormBuilder} from "@angular/forms";
import {Diretor} from "../../diretor/models/diretor";
import {Ator} from "../../ator/models/ator";
import {Classe} from "../../classe/models/classe";
import {DiretorService} from "../../diretor/services/diretor.service";
import {AtorService} from "../../ator/services/ator.service";
import {ClasseService} from "../../classe/services/classe.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";
import {TituloService} from "../services/titulo.service";
import {Titulo} from "../models/titulo";
import {ActivatedRoute, Router} from "@angular/router";
import {combineLatestWith, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-editar-titulo',
  templateUrl: './editar-titulo.component.html',
  styleUrls: ['./editar-titulo.component.scss']
})

export class EditarTituloComponent implements OnInit {

  public form: FormGroup;

  dirModel: Diretor | undefined;
  clasModel: Classe | undefined;
  atorModel: Ator[] | undefined;

  diretoresArray: Diretor[] = [];
  atoresArray: Ator[] = [];
  classesArray: Classe[] = [];

  $diretor: Observable<Diretor[]>;
  $classe: Observable<Classe[]>;
  $atores: Observable<Ator[]>;

  titulo: Titulo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private tituloService: TituloService,
    private diretorService: DiretorService,
    private atorService: AtorService,
    private classeService: ClasseService,
    private snackBar: MatSnackBar,
    private location: Location,

  ) {
    this.$diretor = of([]);
    this.$classe = of([]);
    this.$atores = of([]);

    this.dirModel = {
      _id: '', nome: ''
    }

    this.clasModel = {
      _id: '', nome: '', data: '', valor: 0
    }

    this.atorModel = [];

    this.form = this.formBuilder.group({
      _id: [''],
      nome: [''],
      ano: [''],
      sinopse: [''],
      categoria: [''],
      atores: [null],
      diretor: [null],
      classe: [null]
    });

    this.titulo = {
      _id: '',
      nome: '',
      ano: '',
      sinopse: '',
      categoria: '',
      atores: [],
      diretor: { _id: '', nome: '' },
      classe: { _id: '', nome: '', data: '', valor: 0 }
    };


  }

  ngOnInit(): void {

    this.titulo = this.route.snapshot.data['titulo'];

    this.setFormValue(this.titulo);

    this.dirModel = this.titulo.diretor;
    this.clasModel = this.titulo.classe;
    this.atorModel = this.titulo.atores;

    this.$classe = this.classeService.list();

    this.$atores = this.atorService.list();

    this.$diretor = this.diretorService.list();


    this.$diretor.pipe(tap((diretor) => {
      this.diretoresArray = diretor;
      this.form.get('diretor')?.setValue(this.titulo.diretor);
    }));

    this.$classe.pipe(tap((classe) => {
      this.classesArray = classe;
    }));

    this.$atores.pipe(tap((atores) => {
      this.atoresArray = atores;
    }));

  }

  compararDiretor(op1: any, op2: any){
    console.log("FODAS E ODSJIFH DUASHFAJ SSAI VEE ")
    console.log(op1, op2);
    if(op1 != null && op2 != null){
      return op1._id === op2._id;
    }
    else{
      return false;
    }
  }


  getDiretor(){
    return this.titulo.diretor;

  }

  setFormValue(titulo: Titulo): void {
    this.form.patchValue({
      _id: titulo._id,
      nome: titulo.nome,
      ano: titulo.ano,
      sinopse: titulo.sinopse,
      categoria: titulo.categoria,


    });
  }

  editarTitulo(): void{
    this.tituloService.editar(this.form.value)
      .subscribe(result => this.sucesso(), error => this.erro());
  }

  cancelar(): void {
    this.location.back();
  }

  private sucesso(){
    this.snackBar.open("Título editado com sucesso!", '', {duration: 5000});
    this.cancelar();
  }
  private erro(){
    this.snackBar.open("Erro ao editar título.", '', {duration: 5000});
  }

}
 */
