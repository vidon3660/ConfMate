Ext.define('Conference.view.twitter.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'twitterMain',

    config: {
        title:'Twitter',
        iconCls:'chat',
        items:[
            {
                title:globalConfig.hashtag || "Twitter",
                layout:{
                    type:'fit'
                },
                items:[
                    {
                        xtype:"twitterDataview"
                    }
                ]
            }
        ]
    }
});
