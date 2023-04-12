angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

    var ddo = {};

    ddo.restrict = 'AE';
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@'
    };

    ddo.templateUrl = 'js/directives/meu-painel.html';
    return ddo;

})
.directive('minhaFoto', function(){

    return{
        restrict: 'AE',
        scope: { titulo: '@', url: '@' },
        template: '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">'
    }
    
})
.directive('meuBotaoPerigo', function(){
    
    var ddo = {};

    ddo.restrict = 'E';

    ddo.scope = {
        nome: '@',
        acao: '&'
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';
    return ddo;
})
.directive('meuFocus', function(){
    var ddo = {};

    ddo.restrict = 'A';

    ddo.link = function(scope, element){
        scope.$on('fotoCadastrada', function(){
            element[0].focus();
        });
    }

    return ddo
})










/*
<meu-painel titulo='{{foto.titulo}}'>
    <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">
</meu-painel>


<div class="panel panel-default" >
    <div class="panel-heading">
        <h3 class="panel-title text-center">{{foto.titulo}}</h3>
    </div>
    <div class="panel-body">
    </div>
</div>
*/