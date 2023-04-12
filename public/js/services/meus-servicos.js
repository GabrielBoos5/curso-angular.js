angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto',function($resource) {
   
    return $resource('/v1/fotos/:fotoId', null, {
        'update' : {
            method: 'PUT'
        }
    });

})
.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope){
    
    var service = {};

    var evento = 'fotoCadastrada';

    service.cadastrar = function(foto){
        return $q(function(resolve, reject){
            
            if(foto._id){
                recursoFoto.update({fotoId: foto._id}, foto, function() {
                    
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem : 'A foto ' + foto.titulo + ' foi alterada com sucesso',
                        inclusao : false 
                    });
                }, function(erro){
                    reject({
                        mensagem : "Não foi possível alterar a foto" + foto.titulo
                    });
                })
            } else {
                recursoFoto.save(foto, function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem : 'Foto incluída com sucesso',
                        inclusao : true
                    }), function(erro){
                        reject({
                            mensagem : 'Não foi possível incluir a foto'
                        })
                    }
                })
            }
            
        })
    }

    return service;

})
