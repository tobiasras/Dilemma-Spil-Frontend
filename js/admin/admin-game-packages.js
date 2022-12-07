function renderPackageList(){
    
    $('#package-info').empty();

    $('#package-info').css("column-count", 1);

    for(let i = 0; i < packageList.length; i++){

    let packageNameLink = '<button class="package-name-buttons" onclick="renderPackageContent(' + packageList[i].id +')">'+ packageList[i].daName + '</button>'

    $('#package-info').append(packageNameLink);
    }

}

function renderPackageContent(packageId){

    let currentPackage;
    let dilemmas;  
    
    $('#package-info').empty();

    $('#package-info').css("column-count", 1);

    for(let i = 0; i < packageList.length; i++){

        if(packageList[i].id === packageId){
        currentPackage = packageList[i];
        
       /* console.log(currentPackage.daName); */
        
        }
    }

    let packageIncludes = '<div class="package-dilemma">'+ currentPackage.daName +' indeholder :<form onsubmit=""><div id="package-added-dilemmas">'+
    '</div><button class="dilemma-submit-button" type="submit">Fjern</button></form></div>'

    $('#package-info').append(packageIncludes);




    dilemmas = packageDilemmaDaNameMap.get(packageId);

    for(let i = 0; i < dilemmas.length; i++){
        
        let packageContent = '<button class="package-dilemma" >'+ dilemmas[i].daName + '</button><input class="package-checkbox" type="checkbox" name="packageIdToRemove" '+
        ' value="'+ dilemmas[i].id + '">'
        
        $('#package-added-dilemmas').append(packageContent);
              
    }

        let packageMissing = '<div class="package-dilemma">'+ currentPackage.daName +' kunne også indeholde :</div><form onsubmit=""><div id="package-non-added-dilemmas">'+
        '</div><button class="dilemma-submit-button" type="submit">Tilføj</button></form></div>'

        $('#package-info').append(packageMissing);    
        
      
        /*
        for(let i = 0; i < dilemmaList.length; i++){

            
            let checkId = dilemmaList[i].id;
            
            console.log(dilemmaList[i]);

            for(let x = 0; x < dilemmas.length; x++){
                
                if(checkId !== dilemmas[x].id){
                    
                    let dilemmaNameLink = '<button class="dilemma-name-buttons">'+ dilemmaList[i].daName + '</button>'
        
                    $('#package-non-added-dilemmas').append(dilemmaNameLink);

                    dilemmaList.splice(i, 1);
                    console.log(dilemmas.splice((x), 1));
                }

            }
                   
        }
        */
        
}