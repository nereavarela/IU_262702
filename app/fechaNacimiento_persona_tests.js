let fechaNacimiento_persona_def_tests = Array (

    //tests ADD
    Array('persona','dni','input',1,'cumple tamaño minimo','min_size','ADD','fechaNacimiento_persona_min_size_KO','formato fecha invalido'),
    Array('persona','dni','input',1,'cumple tamaño maximo','max_size','ADD','fechaNacimiento_persona_max_size_KO','formato fecha invalido'),
    Array('persona','dni','input',1,'Cumple formato fecha','format','ADD','fechaNacimiento_persona_format_KO','formato fecha invalido'),
    Array('persona','dni','input',2,'Cumple formato fecha','valid','ADD',true,'formato fecha valido'),

    //tests EDIT
    ['persona','dni','input',1,'cumple tamaño minimo','min_size','ADD','fechaNacimiento_persona_min_size_KO','no cumple tamaño minimo']
    ['persona','dni','input',1,'cumple tamaño maximo','max_size','ADD','fechaNacimiento_persona_max_size_KO','no cumple tamaño maximo']
    ['persona','dni','input',3,'Cumple formato fecha','format','EDIT','fechaNacimiento_persona_format_KO','formato fecha invalido'],
    ['persona','dni','input',4,'cumple formato fecha','valid','EDIT',true,'formato fecha valido']

);

let fechaNacimiento_persona = Array (

    //prueba add formato invalido
    Array('persona','fechaNacimiento_persona',1,1,'ADD',{fechaNacimiento_persona:'a5/3/05'},'fechaNacimiento_persona_format_ko'),

    //prueba add formato valido
    Array('persona','fechaNacimiento_persona',2,2,'ADD',{fechaNacimiento_persona:'05/05/2005'},true),

    //prueba edit formato invalido
    Array('persona','fechaNacimiento_persona',3,3,'EDIT',{fechaNacimiento_persona:'5/5/5'},'fechaNacimiento_persona_format_ko'),

    //prueba edit formato valido
    Array('persona','fechaNacimiento_persona',4,4,'EDIT',{fechaNacimiento_persona:'11/08/1995'},true)

);