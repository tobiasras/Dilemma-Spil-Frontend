var dilemmaListToBeSpliced = [];

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

    let packageIncludes = '<div class="package-dilemma">'+ currentPackage.daName +' indeholder :<form onsubmit="removingDilemmasFromPackage(event, '+ currentPackage.id +'"><div id="package-added-dilemmas">'+
    '</div><button class="dilemma-submit-button" type="submit">Fjern</button></form>'

    $('#package-info').append(packageIncludes);


    dilemmas = packageDilemmaDaNameMap.get(packageId);

    for(let i = 0; i < dilemmas.length; i++){
        
        let packageContent = '<button class="package-dilemma" >'+ dilemmas[i].daName + '</button><input class="package-checkbox" type="checkbox" name="packageIdToRemove" '+
        ' value="'+ dilemmas[i].id + '">'
        
        $('#package-added-dilemmas').append(packageContent);
              
    }

        let packageMissing = '<div class="package-dilemma">'+ currentPackage.daName +' kunne også indeholde :</div><form onsubmit="addingDilemmasToPackage(event, '+ currentPackage.id +')"><div id="package-non-added-dilemmas">'+
        '</div><button class="dilemma-submit-button" type="submit">Tilføj</button></form>'

        $('#package-info').append(packageMissing);    
        

        /* all of this just to show non added dilemmas */
        
        dilemmaListToBeSpliced = [];

        for(let i = 0; i < dilemmaList.length; i++){

            dilemmaListToBeSpliced.push(dilemmaList[i]);

        }
        
        for(let i = 0; i < dilemmaList.length; i++){
            
            let checkId = dilemmaList[i].id;
            
            for(let x = 0; x < dilemmas.length; x++){
                
                if(checkId === dilemmas[x].id){
                    
                    for(let i = 0; i < dilemmaListToBeSpliced.length; i++){

                        if(dilemmaListToBeSpliced[i].id === checkId){

                            dilemmaListToBeSpliced.splice(i, 1);       

                        }

                    }

                }

            }
                   
        }
        
        for(let i = 0; i < dilemmaListToBeSpliced.length; i++){

        let dilemmaNameLink = '<button class="dilemma-name-buttons">'+ dilemmaListToBeSpliced[i].daName + '</button><input class="package-checkbox" '+
        ' type="checkbox" id="packageIdToAdd'+ dilemmaListToBeSpliced[i].id +'" name="dilemmaToAdd" value="'+ dilemmaListToBeSpliced[i].id + '">'
        
            $('#package-non-added-dilemmas').append(dilemmaNameLink);
            
        }

        /* end of showing non added dilemmas */ 

}