
// adminka page

//buildAdminTable(reviews)
loadAdminPage();
var host = 'http://95.46.44.169:8080/';
function buildAdminTable(rev) {
    $(".backgroundAdm").hide()
var L = rev.length
    for (var i = 0; i < L; i++) {
    if(rev[i].showed==false){
        $('.adminTable').append('<tr>' +
            '<td>' + rev[i].nameSender + '</td>' +
            '<td>' + rev[i].surnameSender + '</td>' +
            '<td>' + rev[i].number + '</td>' +
            '<td><img src="' + host + rev[i].photo + '" width="100px" height="100px"/></td>' +
            '<td>' + rev[i].address + '</td>' +
            '<td>' + rev[i].description + '</td>' +
            '<td>' + rev[i].rating + '</td>' +
            '<td> Не опубліковано</td>' +
            '<td><input class="publish" type="button" alt="'+rev[i].id+'" value="публікувати">' +
            '<input class="delete" type="button" alt="'+rev[i].id+'" value="видалити"></td>' +
            '</tr>')}else{
        $('.adminTable').append('<tr>' +
            '<td>' + rev[i].nameSender + '</td>' +
            '<td>' + rev[i].surnameSender + '</td>' +
            '<td>' + rev[i].number + '</td>' +
            '<td><img src="' + host +  + rev[i].photo + '" width="100px" height="100px"/></td>' +
            '<td>' + rev[i].address + '</td>' +
            '<td>' + rev[i].description + '</td>' +
            '<td>' + rev[i].rating + '</td>' +

            '<td>Опубліковано</td>' +
            '<td><input class="notpublish" type="button" alt="'+rev[i].id+'" value="не публікувати"><input  class="delete" type="button" value="видалити" alt="'+rev[i].id+'"></td>' +
            '</tr>')
        }
    }
    $(".backgroundAdm").hide()
}

    function addCickOnBtn(){


        $(".notpublish").click(function(){
            var id = this.alt;
            $.ajax({
                url: + host + 'reviews/notshow/'+id,
                // headers: {
                //     'X-Auth-Token': localStorage.getItem("token")
                // },
                type: 'POST',
                contentType: 'application/json',
                success:function(){         
                    window.location.reload();
                }
                
            });
        });

        $(".publish").click(function(){
            var id = this.alt;
            $.ajax({
                url: + host + 'reviews/show/'+id,
                // headers: {
                //     'X-Auth-Token': localStorage.getItem("token")
                // },
                type: 'POST',
                contentType: 'application/json',
                success:function(){         
                    window.location.reload();
                }
                
            });
        });

        $(".delete").click(function(){
            var id = this.alt;
            $.ajax({
                url: + host + 'reviews/'+id,
                // headers: {
                //     'X-Auth-Token': localStorage.getItem("token")
                // },
                type: 'DELETE',
                contentType: 'application/json',
                success:function(){         
                    window.location.reload();
                }
                
            });
        });
    }

$("#cancelButton").click(function () {
    $("#login, #password").val('')
})

function loadDataFromServer(){
    $.ajax({
            url: + host + 'reviews',
            // headers: {
            //     'X-Auth-Token': localStorage.getItem("token")
            // },
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
                admReviews = data;
                buildAdminTable(admReviews);
                addCickOnBtn();
            }
            
        });
}

function loadAdminPage(){
    var token = localStorage.getItem("token");
    if(token!=null){
        loadDataFromServer();
    }
}



$("#okButton").click(function () {
    var admReviews
    var adm = {}
    adm.login = $('#login').val()
    adm.pass = $('#password').val()
    $("#login, #password").val('')
    $.ajax({
        url: + host + "login",
        type: 'POST',
        data: JSON.stringify(adm),
        dataType: 'json',
        contentType: 'application/json',
        success:function(data, r, a){
            localStorage.setItem('token', data);

            loadDataFromServer();
        },
        error:function(data, r, a){
            alert("wrong login or pass")
            localStorage.setItem('token', data);
        }
    });
    
    
//
//    }).done(function (msg) {
//        localStorage.setItem('token', msg);
//        $.ajax({
//            url: 'http://localhost:8088/reviews',
//            header: {
//                'X-Auth-Token': localStorage.getItem("token")
//            },
//            type: 'GET',
//            data: JSON.stringify(newReview),
//            contentType: 'application/json',
//            success: function (data) {
//                admReviews = data
//                buildAdminTable(admReviews)
//            }
//
//
//        })
//    });
});
//$(".publishB").click(function(){
//    var id=$(this).attr('alt')
//    
// $.ajax({
//url:'http://localhost:8088/reviews/show/'+id,
//type:'post',
//header: {
//'X-Auth-Token': localStorage.getItem("token")
//},
//success:function(){
//console.log('success')
//                    }
//                });
//});
//
//$(".deleteB").click(function(){
//    var id=$(this).attr('alt')
//
//
//    $.ajax({
//            url:'http://localhost:8088/reviews/'+id,
//            header:{
//                'X-Auth-Token':localStorage.getItem("token")
//            },
//            type:'DELETE'
//        })
//
//
//
//});









