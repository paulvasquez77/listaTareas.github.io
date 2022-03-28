
var app = angular.module("MyApp", []);
    app.controller('MyController', function($scope){
        var lista = this;
        lista.tareas = [
            {nombre: "comprar verduras"}
        ];
        
        lista.agregarTarea = function(){
            var nueva = lista.nueva;

            if(nueva != ""){
                
                lista.tareas.push({nombre: nueva});
                lista.nueva = "";
            }
        }
        
        lista.borrar = function(index){
            lista.tareas.splice(index, 1);
        }

        lista.editar = function(hacer){
            //console.log(hacer);
            lista.tareas.poner = hacer;
        }
        
});

