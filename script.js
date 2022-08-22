const data = ['Иван', 'Иванов', 'Отдел разработки'];


function func(emp){
    // let name    = emp[0];
    // let surname  = emp[1];
    // let departament = emp[2];


    let [name, surname, departament] = data

    let position ;
    if(position !== undefined){
       
        position = emp[3];
    }else{

        position = 'junior';

    }
    console.log(name, surname, departament, position);
}

func(data);