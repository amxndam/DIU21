/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.Alhucemas";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/amxndam/DIU21";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /***************************************/
                /*** PRIMERA PERSONA -> Joaquin Luque **/
                /***           Cambiar datos          **/
                /***************************************/
                
                
				Id: 0,
				Name: "Joaquin Luque",
				Photo: "joaquin.png",
				Quote: "Los Errores son las Soluciones de la Vida",
				Age: 24,
				Occupation: "Estudiante de Medicina",
				Family: "Hijo Único",
				Location: "Madrid (Villaviciosa)",
				Character: "Le gusta explorar lo desconocido",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Viajar a todos los continentes del mundo .", "Independencia económica .","Aprender a tocar el violín .","Abrir un hospital propio .","Aprender 3 nuevos idiomas ."],
				Frustrations: ["Le gustaría tener más tiempo libre para dedicarlo a descubrir nuevos retos .","Utiliza mucho la tecnología pero le surgen problemas que no consigue resolver solo ."],
				Bio: "Ha nacido en Granada y ha vivido toda su vide en Granada hasta graduarse y entonces dedicó un año para intentar viajar siempre que podía, hasta que consiguó un trabajo en una tienda de ropa, en donde conoció al que ahora es su mejor amigo. A los 20 años con su mejor amigo fueron aceptados en una universidad en madrid donde vive la familia de su mejor amigo. Y ambos alquilaron un piso juntos donde aún siguen viviendo .",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Hace bastante tiempo desde que visitó a su familia debido al trabajo que tiene los fines de semana y la cantidad de proyectos universitarios que realiza, por eso le gustaría poder coger unas vacaciones para visitar a sus padres que viven en Granada .",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /***************************************/
                /*** SEGUNDA PERSONA -> María Carmen  **/
                /***           Cambiar datos          **/
                /***************************************/
                
                
				Id: 1,
				Name: "María Carmen",
				Photo: "maria.jpg",
				Quote: "Tempus Fugit",
				Age: 67,
				Occupation: "Jubilada",
				Family: "Divorciada desde hace 5 años",
				Location: "Toledo",
				Character: "Le gusta disfrutar viajar mucho",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Viajar por toda Andalucía con sus amigas.", "Aprender sobre nuevas culturas y su historia."],
				Frustrations: ["No sabe navegar con los dispositivos electrónicos de manera correcta. No tiene ordenador, sólo un smartphone.", "Le gustaría aprender inglés, pero le cuesta mucho."],
				Bio: "Después de trabajar en la docencia por más de 30 años, ahora vive en un piso en el centro de Toledo, le gusta ir al club del libro, ver documentales en la 2 y hacer viajes con sus amigos o ella sola.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 1 },
					{ Name: "RRSS", Value: 0 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Lleva un tiempo intentando organizar sus viajes mejor y aprender más sobre la ciudad que visite.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])