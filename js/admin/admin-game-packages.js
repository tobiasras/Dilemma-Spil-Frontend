function renderPackageList(){
    
    $('#package-info').empty();

    $('#package-info').css("column-count", 3);

    for(let i = 0; i < packageList.length; i++){

    let packageNameLink = '<button class="package-name-buttons" onclick="renderPackageContent(' + packageList[i].id +')">'+ packageList[i].daName + '</button>'

    $('#package-info').append(packageNameLink);
    }

}

function renderPackageContent(packageId){

    let currentPackage;
    let dilemmas;  
    
    $('#package-info').empty();

    for(let i = 0; i < packageList.length; i++){

        if(packageList[i].id === packageId){
        currentPackage = packageList[i];
        
       /* console.log(currentPackage.daName); */
        
        }
    }

    


    dilemmas = packageDilemmaDaNameMap.get(packageId);

    for(let i = 0; i < dilemmas.length; i++){
        
        let packageContent = '<button class="package-dilemma" >'+ dilemmas[i].daName + '</button>'
        
        $('#package-info').append(packageContent);
              
        }

}