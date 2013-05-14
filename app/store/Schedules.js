Ext.define('Conference.store.Schedules', {
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	
	config: {
		model:'Conference.model.Schedule',
		autoLoad:true,
		grouper: {
		   groupFn: function(record) {
		    	var dateStart = new Date(Date.parse(record.get("starting_at")));
		   		return dateStart.getDate()+"th of "+Ext.Date.monthNames[dateStart.getMonth()+1]+ " - "+dateStart.getHours()+":"+(dateStart.getMinutes().length > 1 ? dateStart.getMinutes() : "00");
		   }
		},
		proxy: {
			type: 'localstorage',
			id:'schedule-'+globalConfig.uniqueId
        },
		data:schedule
	}
});