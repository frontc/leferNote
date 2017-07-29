// Empty JS for your own code to be here
var app = new Vue({
    el:'#app',
    data: {
        title: 'Lefer Note',
        showNotebook:true,
        editorClass1:'col-sm-8',
        editorClass2:'col-sm-10',
        notebookClass:''
    },
    methods:{
        hideNotebook:function () {
            if(this.showNotebook){
                this.showNotebook=false
            }else{
                this.showNotebook=true
            }
        },
        notebookExpand:function () {
            if(this.notebookClass===''){
                this.notebookClass='open'
            }else{
                this.notebookClass=''
            }
        }
    }
});

$(document).ready(function () {
    var testEditor;

    $(function () {
        testEditor = editormd("test-editormd", {
            width: "100%",
            height: 450,
            syncScrolling: "single",
            path: "../lib/",
            taskList : true,
            toolbarIcons: function () {
                return ['undo', 'redo', '|',
                    'bold', 'del', 'italic', 'quote', '|',
                    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', '|',
                    'list-ul', 'list-ol', 'hr', '|',
                    'link', 'image', 'code', 'table', '|',
                    'watch', 'preview', 'help']
            }
        });
    });

})


