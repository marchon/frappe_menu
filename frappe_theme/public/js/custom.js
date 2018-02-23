var menuitems = {

    "crm": [
        { "name": 'lead', icon: 'fa-user', url: '#List/Lead/List' },
        { "name": 'opportunity', icon: 'fa-line-chart', url: '#List/Opportunity/List' },
        { "name": "contact", icon: 'fa-book', url: '#List/Contact/List' }
    ],
    "education": [
        { name: "student", icon: 'fa-bookmark', url: '#List/Student/List' },
        { name: "Student Group", icon: 'fa-id-card-o', url: '#List/Student Group/List' }
    ],
    "account": [
        { name: "Sales Invoice" },
        { name: "Purchase Invoice" },
        { "name": 'DocType', icon: 'fa-user', url: '#List/DocType/List' },
    ]


}

console.log(   
  frappe.call({
                    method: "frappe.desk.search.search_link",
                    args: {
                        doctype: "Menu Category",
                        txt: ""
                    },
                    callback: function(res) {
                        console.log(res.results);
                        $('.filter_list').empty();
                        $('.filter_list').append(frappe.render_template('filter_list', res))

                    }
                }))
console.log(   
  frappe.call({
                    method: "frappe.desk.search.search_link",
                    args: {
                        doctype: "Menu Items",
                        txt: ""
                    },
                    callback: function(res) {
                        console.log(res.results);
                        $('.filter_list').empty();
                        $('.filter_list').append(frappe.render_template('filter_list', res))

                    }
                }))



function change_menu(that) {
    // console.log(that);
    $('.main-sidebar a[href="#_menu11"]').tab('show');

    var me = that;

    $('.zmApps').find('.sel').removeClass('sel');
    $(that).addClass('sel');
    setTimeout(function() {
        $('.menu_result').empty();

        $('.menu_result').append(frappe.render_template("menu_list", { menuitems: menuitems[$(that).attr('id')] }))

    }, 10);




}

function gotolist(that, e) {
    // e.preventDefault();
    // console.log(athat);
    frappe.set_route($(that).attr('id'));
    $(that).parent().parent().find('.sel').removeClass('sel');

    $(that).addClass('sel');

    // console.log(frappe.listview_settings['Lead']);
    $('.filter_list').empty();


    setTimeout(function() {
        if (cur_list) {
            if (frappe.listview_settings[cur_list.doctype]['filterlist']) {
                $('.main-sidebar a[href="#_menu22"]').tab('show');

                $('.filter_list').html(frappe.render_template('filter_list', frappe.listview_settings[cur_list.doctype]['filterlist']))

                // frappe.call({
                //     method: "frappe.desk.search.search_link",
                //     args: {
                //         doctype: frappe.listview_settings[cur_list.doctype].in_filter,
                //         txt: ""
                //     },
                //     callback: function(res) {
                //         console.log(res.results);
                //         $('.filter_list').empty();
                //         $('.filter_list').append(frappe.render_template('filter_list', res))

                //     }
                // });
            }
        }


    }, 500);



}

function exec_filter(doctype, cur_doc, filter_type) {
    // if (frappe.listview_settings[cur_list.doctype].enable_menu) {
    frappe.call({
        method: "frappe.desk.search.search_link",
        args: {
            doctype: doctype,
            txt: ""
        },
        callback: function(res) {
            // console.log(res.results);
            $('.filter_list').html(frappe.render_template('filter_list', res));
            // setTimeout(function() {
            // console.log(frappe.listview_settings);
            frappe.listview_settings[cur_doc].filterlist = res;
            // $('.main-sidebar a[href="#_menu22"]').tab('show');

            // }, 3000);


        }
    });

    // }
}

function select_filter(that) {
    $(that).parent().find('.sel').removeClass('sel');

    $(that).addClass('sel');

    var filter_type = frappe.listview_settings[cur_list.doctype]['filt_field'];
    frappe.set_route("List", cur_list.doctype, {
        [filter_type]: $(that).attr('data-id') });

}



var sfit_module = ["SFIT", "Workout", "Diet"];
var icons = ["bicycle", "user-o", "beer", "cubes", "university", "handshake-o"];

function get_doctypes(module) {
    var o = 0;
    for (var i = 0; i < sfit_module.length; i++) {
        // frappe.call({
        // method: "frappe.desk.moduleview.get",
        // args: {
        // module: module[i]
        // },   
        // callback: function(r){   
        // for (var j = 0; j < r.message.data.length; j++) {
        //  var h='';
        //  for(var k = 0; k < r.message.data[j].items.length; k++){ if(h){
        //   h  = h +'<li><a href="#List/'+r.message.data[j].items[k].name+'"><i class="fa fa-circle-o"></i>'+r.message.data[j].items[k].name+'</a></li>'

        //  }
        //  else{
        //   h  ='<li><a href="#List/'+r.message.data[j].items[k].name+'"><i class="fa fa-circle-o"></i>'+r.message.data[j].items[k].name+'</a></li>'

        //  }
        //    }
        //      $('#menu123').append('<li class="treeview" ><a href="#"><i class="fa fa-'+icons[o]+'"></i>\
        //         <span>'+r.message.data[j].label+'</span>\
        //         <span class="pull-right-container">\
        //           <i class="fa fa-angle-left pull-right"></i>\
        //         </span>\
        //       </a>\
        //       <ul class="treeview-menu">\
        //      '+h+'\
        //       </ul>\
        //     </li>'); 
        //      o++;
        // }
        // },
        // freeze: true,
        // });
    }
}



function selection() {
    if (window.location.hostname == "localhost" || "gym.tridotstech.com") {
        var module = sfit_module;
        get_doctypes(module);
    } else { return 0; }
}

$(document).ready(function() {
    $('header').prepend(frappe.render_template("logo"));
    $('header .navbar .container').prepend(frappe.render_template("sidebar-toggle"));
    $('.main-section').append(frappe.render_template("main-sidebar", { menuitems: menuitems['crm'] }));
    // $('.menu_result').append(frappe.render_template("menu_list"));
    $('header').addClass('main-header');
    // $('header .navbar').removeClass('navbar-fixed-top');
    $('body').addClass('skin-blue sidebar-mini');
    $('#body_div').addClass('content-wrapper');

    bdtheme.set_user_background();
    selection();


});



frappe.provide("bdtheme");

// add toolbar icon
$(document).bind('toolbar_setup', function() {
    frappe.app.name = "bdoop Erp";
    $('.navbar-home').html(frappe._('Home'));

});

bdtheme.set_user_background = function(src, selector, style) {
    if (!selector) selector = "#page-desktop";
    if (!style) style = "Fill Screen";
    if (src) {
        if (window.cordova && src.indexOf("http") === -1) {
            src = frappe.base_url + src;
        }
        var background = repl('background: url("%(src)s") center center;', { src: src });
    } else {
        var background = "background-color: #FFFFFF;";
    }

    frappe.dom.set_style(repl('%(selector)s { \
        %(background)s \
        %(style)s \
    }', {
        selector: selector,
        background: background,
        style: ""
    }));
}

frappe.templates["logo"] = '<a href="/desk" class="logo">' +
    ' <span class="logo-mini"><b>bd</b></span>' +
    '      <span class="logo-lg"><b>bdoop</b></span>' +
    '    </a>';

frappe.templates["sidebar-toggle"] = '<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">' +
    '<span class="sr-only">Toggle navigation</span>' +
    '</a>';
//