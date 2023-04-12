angular.module('alurapic').controller("FotoController", function($scope, recursoFoto, $routeParams, cadastroDeFotos){

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId) {
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto; 
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto'
        });
    }

                                                    
    $scope.submeter = function(){
        if ($scope.formulario.$valid) {
            
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                if(dados.inclusao){
                    $scope.foto = {};
                }
            })
            .catch(function(erro){
                $scope.mensagem = erro.mensagem;
            })

        }
    };
});

  /*
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.fotos = {};
                    $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
                })
                .error(function(erro){
                    console.log(erro);
                    $scope.mensagem = "Não foi possível alterar a foto" + $scope.foto.titulo;
                });
                */