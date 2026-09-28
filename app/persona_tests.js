let persona_def_tests = Array(
    /*TEST NOMBRE PERSONA*/
    Array('persona','nombre_persona','input',1,'cumple tamaño minimo','min_size','ADD','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 4 y 20 caracteres'),
    Array('persona','nombre_persona','input',2,'cumple tamaño maximo','max_size','ADD','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 4 y 20 caracteres'),
    Array('persona','nombre_persona','input',3,'cumple formato','format','ADD','nombre_persona_format_ko','Formato inválido. Debe estar entre 4 y 20 caracteres alfabéticos'),
    Array('persona','nombre_persona','input',4,'es correcto','valid','ADD',true,'Nombre persona correcto'),
    ['persona','nombre_persona','input',5,'cumple tamaño minimo','max_size','EDIT','nombre_persona_min_size_ko','Tamaño muy corto. Debe estar entre 4 y 20 caracteres'],
    ['persona','nombre_persona','input',6,'cumple tamaño maximo','max_size','EDIT','nombre_persona_max_size_ko','Tamaño muy grande. Debe estar entre 4 y 20 caracteres'],
    ['persona','nombre_persona','input',7,'cumple formato','format','EDIT','nombre_persona_format_ko','Formato inválido. Debe estar entre 4 y 20 caracteres alfabéticos'],
    ['persona','nombre_persona','input',8,'es correcto','valid','EDIT',true,'Nombre persona correcto'],
   
    /*TEST DNI*/
    Array('persona','dni','input',9,'cumple tamaño minimo','exact_size','ADD','dni_exact_size_ko','Tamaño muy corto. El DNI debe tener 9 caracteres'),
    Array('persona','dni','input',10'cumple tamaño maximo','max_size','ADD','dni_max_size_ko','Tamaño muy grande. El DNI debe tener 9 caracteres'),
    Array('persona','dni','input',11,'cumple formato','format','ADD','dni_format_ko','Formato inválido. El DNI debe tener 8 números y una letra mayúscula'),
    Array('persona','dni','input',12,'es correcto','valid','ADD',true,'DNI correcto'),
    ['persona','dni','input',13,'cumple tamaño minimo','min_size','EDIT','dni_min_size_ko','Tamaño muy corto. El DNI debe tener 9 caracteres'],
    ['persona','dni','input',14,'cumple tamaño maximo','max_size','EDIT','dni_max_size_ko','Tamaño muy grande. El DNI debe tener 9 caracteres'],
    ['persona','dni','input',15,'cumple formato','format','EDIT','dni_format_ko','Formato inválido. El DNI debe tener 8 números y una letra mayúscula'],
    ['persona','dni','input',16,'es correcto','valid','EDIT',true,'DNI correcto'],

    /*TEST APELLIDO PERSONA */
    Array('persona','apellidos_persona','input',1,'Cumple formato','format','ADD','apellidos_persona_format_ko','No cumple formato'),
    Array('persona','apellidos_persona','input',2,'apellido >= 3','min_size','ADD','apellidos_persona_min_size_ko','No tiene minimo 3 letras'),
    Array('persona','apellidos_persona','input',3,'apellido <= 100','max_size','ADD','apellidos_persona_max_size_ko','Tiene mas de 100 letras'),
    Array('persona','apellidos_persona','input',4,'Cumple formato y tamaño','valid','ADD',true,'Todo es correcto'),
    ['persona','apellidos_persona','input',5,'Cumple formato','format','EDIT','apellidos_persona_format_ko','No cumple formato'],
    ['persona','apellidos_persona','input',6,'apellido >= 3','min_size','EDIT','apellidos_persona_min_size_ko','No tiene minimo 3 letras'],
    ['persona','apellidos_persona','input',7,'apellido <= 100','max_size','EDIT','apellidos_persona_max_size_ko','Tiene mas de 100 letras'],
    ['persona','apellidos_persona','input',8,'Cumple formato y tamaño','valid','EDIT',true,'Todo es correcto'],

    /*TEST FECHA DE NACIMIENTO */
    Array('persona','fechaNacimiento_persona','input',1,'cumple tamaño exacto','exact_size','ADD','fechaNacimiento_persona_exact_size_ko','La fecha debe tener exactamente 10 caracteres'),
    Array('persona','fechaNacimiento_persona','input',2,'cumple formato fecha','format','ADD','fechaNacimiento_persona_format_ko','Formato fecha inválido'),
    Array('persona','fechaNacimiento_persona','input',3,'cumple tamaño y formato','valid','ADD',true,'Formato fecha válido'),
    ['persona','fechaNacimiento_persona','input',4,'cumple tamaño exacto','exact_size','EDIT','fechaNacimiento_persona_exact_size_ko','La fecha debe tener exactamente 10 caracteres'],
    ['persona','fechaNacimiento_persona','input',5,'cumple formato fecha','format','EDIT','fechaNacimiento_persona_format_ko','Formato fecha inválido'],
    ['persona','fechaNacimiento_persona','input',6,'cumple tamaño y formato','valid','EDIT',true,'Formato fecha válido'],

    /*TEST DIRECCION PERSONA */
    Array('persona','direccion_persona','input',1,'cumple tamaño minimo','min_size','ADD','direccion_persona_min_size_ko','La dirección debe tener mínimo 10 caracteres'),
    Array('persona','direccion_persona','input',2,'cumple tamaño maximo','max_size','ADD','direccion_persona_max_size_ko','La dirección debe tener máximo 200 caracteres'),
    Array('persona','direccion_persona','input',3,'cumple formato','format','ADD','direccion_persona_format_ko','Formato de dirección inválido'),
    Array('persona','direccion_persona','input',4,'es correcto','valid','ADD',true,'Dirección correcta'),
    ['persona','direccion_persona','input',5,'cumple tamaño minimo','min_size','EDIT','direccion_persona_min_size_ko','La dirección debe tener mínimo 10 caracteres'],
    ['persona','direccion_persona','input',6,'cumple tamaño maximo','max_size','EDIT','direccion_persona_max_size_ko','La dirección debe tener máximo 200 caracteres'],
    ['persona','direccion_persona','input',7,'cumple formato','format','EDIT','direccion_persona_format_ko','Formato de dirección inválido'],
    ['persona','direccion_persona','input',8,'es correcto','valid','EDIT',true,'Dirección correcta'],

    /*TEST TELEFONO PERSONA */
    Array('persona','telefono_persona','input',1,'cumple tamaño exacto','exact_size','ADD','telefono_persona_exact_size_ko','El teléfono debe tener exactamente 9 caracteres'),
    Array('persona','telefono_persona','input',2,'cumple formato','format','ADD','telefono_persona_format_ko','El teléfono debe contener únicamente 9 dígitos'),
    Array('persona','telefono_persona','input',3,'es correcto','valid','ADD',true,'Teléfono correcto'),
    ['persona','telefono_persona','input',4,'cumple tamaño exacto','exact_size','EDIT','telefono_persona_exact_size_ko','El teléfono debe tener exactamente 9 caracteres'],
    ['persona','telefono_persona','input',5,'cumple formato','format','EDIT','telefono_persona_format_ko','El teléfono debe contener únicamente 9 dígitos'],
    ['persona','telefono_persona','input',6,'es correcto','valid','EDIT',true,'Teléfono correcto'],

    /*TEST FOTO PERSONA*/
    Array('persona','nuevo_foto_persona','file',9,'existe fichero en foto_persona','exist_file','ADD','foto_persona_exist_file_ko','No existe foto. Debe subir una foto en jpg'),
    Array('persona','nuevo_foto_persona','file',10,'foto persona formato incorrecto','format_name_file','ADD','foto_persona_format_name_file_ko','nombre de foto incorrecto. Deben ser alfabeticos sin acentos'),
    Array('persona','nuevo_foto_persona','file',11,'foto persona tamaño excesivo','max_size_file','ADD','foto_persona_max_size_file_ko','Tamaño fichero foto excesivo. Deben ser menor de 20000 bytes'),
);

let persona_pruebas = Array(
    /*PRUEBA NOMBRE PERSONA */
    Array('persona','nombre_persona',1,1,'ADD',{nombre_persona:'aa'},'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',2,2,'ADD',{nombre_persona:'a'.repeat(20)},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',3,3,'ADD',{nombre_persona:'aaaaaa1'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',4,4,'ADD',{nombre_persona:'javi'},true),
    ['persona','nombre_persona',5,5,'EDIT',{nombre_persona:'aa'},'nombre_persona_min_size_ko'],
    ['persona','nombre_persona',6,6,'EDIT',{nombre_persona:'aaaaaaaaaaaaaaaaaaaaa'},'nombre_persona_max_size_ko'],
    ['persona','nombre_persona',7,7,'EDIT',{nombre_persona:'aaaaaa1'},'nombre_persona_format_ko'],
    ['persona','nombre_persona',8,8,'EDIT',{nombre_persona:'javi6'},true],


    /*PRUEBA DNI */
    Array('persona','dni',1,1,'ADD',{dni:'1234ABC'},'dni_format_ko'),
    Array('persona','dni',2,2,'ADD',{dni:'12345678Z'},true),
    Array('persona','dni',3,3,'EDIT',{dni:'8765XYZ'},'dni_format_ko'),
    Array('persona','dni',4,4,'EDIT',{dni:'87654321A'},true),

    /*PRUEBA NOMBRE PERSONA */
    Array('persona','nombre_persona',1,1,'ADD',{nombre_persona:'Lucia123'},'nombre_persona_format_ko'),
    Array('persona','nombre_persona',2,2,'ADD',{nombre_persona:'N'} ,'nombre_persona_min_size_ko'),
    Array('persona','nombre_persona',3,3,'ADD',{nombre_persona:'AlejandroFernandoSebastianMaximilianoFilomenoEustaquio'},'nombre_persona_max_size_ko'),
    Array('persona','nombre_persona',4,4,'ADD',{nombre_persona:'Laura María'},true),
    ['persona','nombre_persona',5,5,'EDIT',{nombre_persona:'Lucia123'},'nombre_persona_format_ko'],
    ['persona','nombre_persona',6,6,'EDIT',{nombre_persona:'N'} ,'nombre_persona_min_size_ko'],
    ['persona','nombre_persona',7,7,'EDIT',{nombre_persona:'AlejandroFernandoSebastianMaximilianoFilomenoEustaquio'},'nombre_persona_max_size_ko'],
    ['persona','nombre_persona',8,8,'EDIT',{nombre_persona:'AlejandroFernandoSebastianMaximilianoFilomenoEustaquio'},'nombre_persona_max_size_ko'],
    ['persona','nombre_persona',4,4,'ADD',{nombre_persona:'Laura María'},true],

    /*PRUEBA APELLIDO PERSONA */
    Array('persona','apellidos_persona',1,1,'ADD',{apellidos_persona:'García123'},'apellidos_persona_format_ko'),
    Array('persona','apellidos_persona',2,2,'ADD',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'),
    Array('persona','apellidos_persona',3,3,'ADD',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'),
    Array('persona','apellidos_persona',4,4,'ADD',{apellidos_persona:'García López'},true),
    ['persona','apellidos_persona',5,5,'EDIT',{apellidos_persona:'Pérez123'},'apellidos_persona_format_ko'],
    ['persona','apellidos_persona',6,6,'EDIT',{apellidos_persona:'aa'},'apellidos_persona_min_size_ko'],
    ['persona','apellidos_persona',7,7,'EDIT',{apellidos_persona:'a'.repeat(101)},'apellidos_persona_max_size_ko'],
    ['persona','apellidos_persona',8,8,'EDIT',{apellidos_persona:'Muñoz Pérez-Gómez'},true],

    /*PRUEBA FECHA DE NACIMIENTO */
    Array('persona','fechaNacimiento_persona',1,1,'ADD',{fechaNacimiento_persona:'1/1/2000'},'fechaNacimiento_persona_exact_size_ko'),
    Array('persona','fechaNacimiento_persona',2,2,'ADD',{fechaNacimiento_persona:'35/15/2000'},'fechaNacimiento_persona_format_ko'),
    Array('persona','fechaNacimiento_persona',3,3,'ADD',{fechaNacimiento_persona:'15/06/2000'},true),
    ['persona','fechaNacimiento_persona',4,4,'EDIT',{fechaNacimiento_persona:'2/12/1998'},'fechaNacimiento_persona_exact_size_ko'],
    ['persona','fechaNacimiento_persona',5,5,'EDIT',{fechaNacimiento_persona:'00/13/1995'},'fechaNacimiento_persona_format_ko'],
    ['persona','fechaNacimiento_persona',6,6,'EDIT',{fechaNacimiento_persona:'23/09/1997'},true],

    /*PRUEBA DIRECCION PERSONA */
    Array('persona','direccion_persona',1,1,'ADD',{direccion_persona:'Calle Sol'},'direccion_persona_min_size_ko'),
    Array('persona','direccion_persona',2,2,'ADD',{direccion_persona:'a'.repeat(201)},'direccion_persona_max_size_ko'),
    Array('persona','direccion_persona',3,3,'ADD',{direccion_persona:'Calle Principal @ 25'},'direccion_persona_format_ko'),
    Array('persona','direccion_persona',4,4,'ADD',{direccion_persona:'Calle García 25'},true),
    ['persona','direccion_persona',5,5,'EDIT',{direccion_persona:'Rua Nova'},'direccion_persona_min_size_ko'],
    ['persona','direccion_persona',6,6,'EDIT',{direccion_persona:'b'.repeat(201)},'direccion_persona_max_size_ko'],
    ['persona','direccion_persona',7,7,'EDIT',{direccion_persona:'Avenida Galicia # 32'},'direccion_persona_format_ko'],
    ['persona','direccion_persona',8,8,'EDIT',{direccion_persona:'Avenida Pérez-García 15'},true],

    /*PRUEBA TELEFONO PERSONA */
    Array('persona','telefono_persona',1,1,'ADD',{telefono_persona:'12345678'},'telefono_persona_exact_size_ko'),
    Array('persona','telefono_persona',2,2,'ADD',{telefono_persona:'12345abcd'},'telefono_persona_format_ko'),
    Array('persona','telefono_persona',3,3,'ADD',{telefono_persona:'666777888'},true),
    ['persona','telefono_persona',4,4,'EDIT',{telefono_persona:'9876543210'},'telefono_persona_exact_size_ko'],
    ['persona','telefono_persona',5,5,'EDIT',{telefono_persona:'abc456789'},'telefono_persona_format_ko'],
    ['persona','telefono_persona',6,6,'EDIT',{telefono_persona:'611223344'},true],

    /*PRUEBA FOTO PERSONA */
    Array('persona','nuevo_foto_persona',9,9,'ADD',{},'nuevo_foto_persona_not_exist_file_ko'),
    ['persona','nuevo_foto_persona',10,10,'ADD',{nuevo_foto_persona:{format_name_file:'nombrejpg00.jpg',type_file:'image/jpeg',max_size_file:200}},'nuevo_foto_persona_format_name_file_ko'],
    ['persona','nuevo_foto_persona',11,11,'ADD',{nuevo_foto_persona:{format_name_file:'nombrejpg.jpg',type_file:'image/jpeg',max_size_file:2000000000}},'nuevo_foto_persona_max_size_file_ko'],


);

