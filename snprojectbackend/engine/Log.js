var log = {
    info : function(info){
        console.log('INFO: '+ info)
    },

    warning: function(warning){
        console.log('WARNING: '+ info)
    },

    error: function(error){
        console.log('ERROR: '+error)
    }
}

module.exports = log;