/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.Alhucemas";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/amxndam/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Joaquin Luque",
                Photo: "joaquin.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere hacer una visita a Granada con sus nuevos amigos de Madrid para mostrarles su ciudad durante las vacaciones de Semana Santa",
                touch1: "Calendario",
                feel1: "5",
                con1: "No puedo acoger a todos sus amigos en el piso de sus padres por lo que tiene que planear todo el viaje",
                ima1: "cartoon-planning.png",
				

                /*** PASO #2: DECISION ***/ 
                goal2: "Empieza a buscar en internet agencias online que proporcionan viajes organizados baratos",
                touch2: "Ordenador",
                feel2: "2",
                con2: "No consigue encontrar alojamientos a buen precio y cercanos a la casa de sus padres",
                ima2: "cartoon-PCangry.png",
                

                /*** PASO #3: ACTUA ***/ 
                goal3: "Decide no dormir en la casa de sus padres sino alquilar un alojamiento junto con sus amigos y por eso avisa a sus padres",
                touch3: "Móvil (Llamada)",
                feel3: "3",
                con3: "Está preocupado por no tener suficiente tiempo para organizar todo el viaje ya que después de Semana Santa tiene una serie de exámenes a realizar",
                ima3: "cartoon-phoning.png",
                

                /*** PASO #4: OBSERVA ***/ 
                goal4: "Su primo le recomienda una página web de planificación de viajes que incluye alojamiento",
                touch4: "Ordenador",
                feel4: "4",
                con4: "Busca visitas a localizaciones interesantes de Granada, alojamientos cercanos a la casa de sus padres, compara precios y tiene que ver si se puede conseguir aparcamiento fácil ya que van en el coche de su amigo",
                ima4: "cartoon-PCtyping.png",
                

                 /*** PASO #5: ANALIZA ***/ 
                goal5: "Encuentra 2 opciones que incluyen alojamiento a 500 metros de la casa de sus padres",
                touch5: "Ordenador (Página Web)",
                feel5: "2",
                con5: "Le resulta super incómodo comparar precios porque la página no indica el precio de cada visita por lo que tiene que estar llamando a cada localización para conocer el precio total",
                ima5: "cartoon-PChard.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                goal6: "Al final consiguió realizar una reserva en el último momento",
                touch6: "Ordenador (Página Web)",
                feel6: "3",
                con6: "Para la siguiente quiere usar una página que permita el pago a través de la misma para que el proceso de reserva sea más fácil y rápido",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
                Name: "María Carmen",
                Photo: "maria.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Preparar sus próximo viaje a Granada con sus amigas.",
                touch1: "Amigas",
                feel1: "4",
                con1: "Decidir qué monumentos visitar",
                ima1: "cartoon-teamthinking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar en la playstore por una aplicación que englobe la información que necesita.",
                touch2: "Móvil (playstore)",
                feel2: "2",
                con2: "Las aplicaciones no tienen una descripción adecuada, por lo que al final descarga la primera que ve.",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encontrar la información.",
                touch3: "Móvil (aplicación)",
                feel3: "3",
                con3: "Navega por la aplicación y ve información en algunas partes que le interesa, pero no sabe cómo guardala para llevársela al viaje en el móvil.",
                ima3: "cartoon-phone-sitting.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encontrar cómo guardar la información que le interesa en el móvil.",
                touch4: "Móvil (aplicación)",
                feel4: "2",
                con4: "Al no encontrar la opción en la app, termina pidiendo ayuda en un correo a atención al cliente.",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Pedir ayuda a atención al cliente por correo.",
                touch5: "móvil (correo)",
                feel5: "1",
                con5: "Tardan una semana en responderle al correo, y le dan instrucciones muy difíciles de entender",
                ima5: "cartoon-phone-sitting.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Apuntar la información en una libreta",
                touch6: "libreta",
                feel6: "3",
                con6: "Al final, tiene que apuntar la información a mano y llevárse una libreta al viaje.",
                ima6: "cartoon-writting.png",
                
            }
		];
        
		$scope.model = $scope.Journeys[0];

	}])



