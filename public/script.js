// Get elements from html file
let inpName = $('.taskInputName');
let inpDescr = $('.taskInputDescr');
let addBtn = $('.addBtn');

// Activates func when 'Enter' key is pressed on keyboard
$(document).keypress(function(e) {
    if(e.which === 13) {
        addBtn.click()
    }
})
    
// check if user input values, if input then continue, if not alert comes off
addBtn.click(function (a) {
    a.preventDefault(); 

    if (inpName.val() === '' || inpDescr.val() === '') {

        Swal.fire({
            title: "Oops! It looks like you forgot to enter a task. Please type in your task and try again.",
            text: "Don't leave me hanging like a lost sock!",
            icon: 'warning',
        });

    }

    // when values is inputed, then creates element and task will add

    if(inpName.val() && inpDescr.val()) {
        
        // container is created for add task
        let container = $('<div>', {
            css: {
                width: '900px',
                height: '130px',
                backgroundColor: 'white',
                borderRadius: '16px',
                marginTop: '25px',
                padding: '10px'
            }
        })

        // create h1 for title

        let title = $('<h1>', {
            text: `${inpName.val()}`,
            css: {
                fontSize: '32px',
                color: 'black',
                paddingLeft: '10px',
                paddingTop: '5px',
            }
        }).addClass('font-margarine')

        // create p for description

        let descr = $('<p>', {
            text: `${inpDescr.val()}`,
            css: {
                fontSize: '16px',
                color: 'grey',
                paddingLeft: '13px',
                paddingTop: '5px'
            }
        }).addClass('font-margarine')

        // create i for delete icon

        let xIcon = $('<i>', {
            class: 'fa-regular fa-x fa-2xl;',
            css: {
                fontSize: '1.5em',
                position: 'relative',
                left: '810px',
                top: '-70px',
                color: '#ff0000',
                cursor: 'pointer'
                
            }
        })
        // create i for check icon

        let checkIcon = $('<i>', {
            class: 'fa-regular fa-circle-check fa-2xl',
            css: {
                fontSize: '1.7em',
                position: 'relative',
                left: '790px',
                top: '-74px',
                color: '#63E6BE',
                cursor: 'pointer'
            }        })


        // create i for edit icon

        let editIcon = $('<i>', {
            class: 'fa-solid fa-pen-to-square',
            css: {
                fontSize: '1.7em',
                position: 'relative',
                left: '790px',
                top: '-10px',
                color: 'black',
                cursor: 'pointer'
            }
        })
        
        // adds elements in container element

        container.append(title)
        container.append(descr)
        container.append(checkIcon)
        container.append(xIcon)
        container.append(editIcon)
        
        // adds element in task container for display

        $('#taskContainer').append(container)
        
        inpName.val('')
        inpDescr.val('')
        
        // if icon is clicked, then appear suitable alert 
        checkIcon.click(function() {
            Swal.fire({
                title: "Success✅",
                text: "Good Job!",
                icon: 'success',
            });

            container.fadeOut()

        })

        xIcon.click(function() {
            Swal.fire({
                title: "Failure❌",
                text: "Don't be pussy, Be Better!🎯",
                icon: 'error',
            });

            container.fadeOut()
        })

        // change task name and description

            editIcon.click(async function() {
                const { value: newTitle } = await Swal.fire({
                    title: 'Change task name',
                    input: 'text',
                    inputLabel: 'New Task Name',
                    inputPlaceholder: 'Enter new task name',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'You need to write something!';
                        }
                    }
                });
        
                if (newTitle) {
                    $(title).text(newTitle);
                    Swal.fire(`Task name changed to: ${newTitle}`);
                }

                const { value: newDescr } = await Swal.fire({
                    title: 'Change task description',
                    input: 'text',
                    inputLabel: 'New Task Description',
                    inputPlaceholder: 'Enter new task description',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'You need to write something!';
                        }
                    }
                });
        
                if (newDescr) {
                    $(descr).text(newDescr);
                    Swal.fire(`Task name changed to: ${newDescr}`);
                }
            });
    }
});



/*
    if main content shifts upword after alert comes, then use this.

    css - 
        /* Default state of the wrapper */
        /* #wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
        }

        /* Add a class to the body when the alert is shown */
        /* body.no-scroll #wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            

    // jQuery
    
    
       onClose: () => {
                $('body').removeClass('no-scroll');
            }
        });
        
        $('#wrapper').css({
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        });
            
        return;
    }
*/

