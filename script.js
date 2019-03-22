(function () {
    'use strict';
   
    let tagField = document.createElement ('div'),
        inputEl = document.createElement('input');
        tagField.setAttribute('id', 'tag-Field');
    inputEl.setAttribute('id','inputElement');
    inputEl.setAttribute('type','text');
    
    document.body.append(tagField);
    tagField.append(inputEl);

    inputEl.addEventListener('keypress', function(event){
        let ENTER = 13,
            COMMA = 188,
            activeTags = inputEl.value.split(',');
            

            if(event.keyCode === ENTER || event.keyCode === COMMA){
                event.preventDefault();
                if(event.target.value === ''){
                    console.log('empty input');
                }else {
                    addToTag(event);
                }
            }

    });
    
    function addToTag(event){
        let tag = event.target.value,
            containersForTags = document.createElement('div');
            containersForTags.classList.add("containersForTags");
        let containerForTag=document.createElement('div');
            containerForTag.classList.add("tagsInBlock");
            let activeTags = inputEl.value.split(',');
            tagField.insertBefore(containersForTags, inputEl);
            containersForTags.appendChild(containerForTag);
            
            if(activeTags.length>0){
                activeTags.forEach(function( activeTags){
                    containerForTag.textContent=activeTags;
                    inputEl.value='';
                });
            }
        containersForTags.addEventListener('click', removeTag, false);
        
    }
   
    function removeTag (event) {
        let tagsToRemove = event.target.closest('div');
        tagsToRemove.remove();
    }
      

    



    
    // Style Elements
    tagField.style.border = '1px solid black';
    tagField.style.borderRadius = '5px';
    tagField.style.padding = '3px'; 
    inputEl.style.border = 'none';
    inputEl.style.outline = 'none';
    inputEl.style.width='calc(100%-content)';
    // End Style Elements

}());

  
