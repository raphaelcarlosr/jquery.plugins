
/**
* jQuery Plugins
*/
;(function($, yepnope){
    //'use strict';
    //plugins stack 
    var plugins = {};    
    //constructor
    $.plugins = function(){};
    //add nw plugin
    $.plugins.add = function(name, files, loadCallback){
        if(!files){ throw new Error('Files of plugin not set'); } 
        if(!loadCallback){ loadCallback = $.noop;}        

        //add to stack
        if ((name in plugins) === false){
            //create settings
            plugins[name] = {
                //is loading
                loading: false, 
                //all call when loading
                callQueue: []
            };            
        }
        //register on jquery 
        $.fn[name] = function(){
            //var args = Array.prototype.slice.call(arguments);
            var args = arguments;
            //if is loading
            if (plugins[name].loading === true) {
                plugins[name].callQueue.push([this, args]);
                return void (0);
            } 
            //mark as loading
            plugins[name].loading = true;
            var that = this;
            //load
            yepnope({
                load: files,
                complete: function(){
                    //callback
                    try{ loadCallback.call(that, args); }catch(ex){ throw new Error('jQuery Plugin load callback error. ' + ex.toString()); } 
                    //call plugin
                    $(that)[name].apply(that, args);                                        
                    //call all times
                    if (plugins[name].callQueue) {
                        for (var i = 0, l = plugins[name].callQueue.length; i < l; i++) {
                            //$(plugins[name].callQueue[i][0])[name](plugins[name].callQueue[i][1], plugins[name].callQueue[i][2]);
                            $(plugins[name].callQueue[i][0])[name].apply(plugins[name].callQueue[i][0], plugins[name].callQueue[i][1]);
                        }
                    }
                    delete plugins[name];
                },
                error: function(){
                    console.error('Load plugin error', arguments);
                }
            });
            return this;
        };  
        return this;
    };
})(window.jQuery, window.yepnope);

/**


//auto load plugin
$('#datepick').datepicker();
*/

