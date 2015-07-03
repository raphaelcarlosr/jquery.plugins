# jQuery Plugin  = $.plugins

jQuery plugins, auto load plugin and prepare it to use 

Register your plugin
```javascript
$.plugins.add('datepicker', ['https://cdn.rawgit.com/eternicode/bootstrap-datepicker/master/dist/js/bootstrap-datepicker.min.js', 'https://cdn.rawgit.com/eternicode/bootstrap-datepicker/master/dist/css/bootstrap-datepicker3.min.css'], function () {
    $.fn.datepicker.dates['pt-BR'] = {
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
        daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        clear: "Limpar"
    };

    //default
    $.fn.datepicker.defaults.language = "pt-BR";
    $.fn.datepicker.defaults.todayHighlight = true;
    $.fn.datepicker.defaults.toggleActive = true;
    $.fn.datepicker.defaults.format = "dd/mm/yyyy";
}); 
```

Use as you know
``` javascript
//auto load plugin
$('#input').datepicker();
```

