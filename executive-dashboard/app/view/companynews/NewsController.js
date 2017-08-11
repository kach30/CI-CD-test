Ext.define('ExecDashboard.view.companynews.NewsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.news',

    require:[
        'ExecDashboard.view.companynews.AddNews',
        'Ext.window.Toast'
    ],

    init: function (view) {
        // We provide the updater for the activeState config of our View.
        view.updateActiveState = this.updateActiveState.bind(this);
    },

    onNewsClick: function(btn, menuitem) {
        var view = this.getView();
        view.setActiveState(menuitem.type);
    },

    addDeleteButton: function (sender, details) {
        var me = this,
            items = sender.getStore().getData(),
            renderTos = Ext.Element.select('.divDeletePost').elements,
            renderToEdits = Ext.Element.select('.divEditPost').elements,
            storeId;
        for (var i = 0; i < items.length; i++) {
            storeId = items.getAt(i).get('id');
            Ext.create({
                xtype: 'button',
                iconCls: 'x-fa fa-trash-o',
                style: {
                    'margin-top': '-50px'
                },
                componentCls: storeId,
                renderTo: renderTos[i],
                handler: me.onDeletePostClick
            });
            Ext.create({
                xtype: 'button',
                iconCls: 'x-fa fa-pencil-square-o',
                style: {
                    'margin-top': '-50px'
                },
                componentCls: storeId,
                renderTo: renderToEdits[i],
                handler: me.onEditPostClick
            });
        }
    },
    onDeletePostClick: function(btn){
        var selectedNewsId = btn.componentCls,
            newsStore = Ext.first('news').getStore();

        newsStore.remove(newsStore.getById(selectedNewsId));
    },
    onEditPostClick: function(btn){
        var selectedNewsId = btn.componentCls,
            newsStore = Ext.first('news').getStore(),
            selectedRecord = newsStore.getById(selectedNewsId),
            storeId = selectedRecord.id,
            newsView,
            newsVm;

        Ext.create('Ext.window.Window',{
            autoShow: true,
            modal: true,
            title: 'Edit News',
            minWidth: 600,
            minHeight: 400,
            items:{
                xtype: 'executive-dashboard-new-news'
            }
        });
        newsView = Ext.first('executive-dashboard-new-news');
        newsVm = newsView.getViewModel();

        newsVm.set({
            selectedRec: selectedRecord
        });
        newsView.lookupReference('newsTitle').setValue(selectedRecord.get('title'));
        newsView.lookupReference('newsDetails').setValue(selectedRecord.get('paragraph'));
        newsView.lookupReference('newsType').setValue({
            rb: selectedRecord.get('type')
        });
    },

    renderTitleColumn: function (value, metaData, record) {
        var view = this.getView(),
            plugin = view.getPlugin('rowexpander'),
            tpl = view.titleTpl;

        if (!tpl.isTemplate) {
            view.titleTpl = tpl = new Ext.XTemplate(tpl);
        }

        var data = Ext.Object.chain(record.data);

        data.expanded = plugin.recordsExpanded[record.internalId] ? ' style="display: none"' : '';

        return tpl.apply(data);
    },

    updateActiveState: function (activeState) {
        var viewModel = this.getViewModel();
        var filterButton = this.lookupReference('filterButton');

        filterButton.setActiveItem(activeState);
        viewModel.set('category', activeState);

        this.fireEvent('changeroute', this, 'news/' + activeState);
    },

    //-------------------------------------------------------------------------
    // RowExpander management

    onCompanyClick: function(dv, record, item, index, e) {
        if (e.getTarget('.news-toggle')) {
            var grid = this.getView(),
                plugin = grid.getPlugin('rowexpander');

            plugin.toggleRow(index, record);
        }
    },

    onCompanyExpandBody: function (rowNode) {   // , record, expandRow, eOpts
        Ext.fly(rowNode).addCls('x-grid-row-expanded');
        Ext.fly(rowNode).down('.news-paragraph-simple').enableDisplayMode().hide();
        Ext.fly(rowNode).down('.expand').enableDisplayMode().hide();
    },

    onCompanyCollapseBody: function (rowNode) {  //, record, expandRow, eOpts
        Ext.fly(rowNode).removeCls('x-grid-row-expanded');
        Ext.fly(rowNode).down('.news-paragraph-simple').enableDisplayMode().show();
        Ext.fly(rowNode).down('.expand').enableDisplayMode().show();
    },

    onAddPostClick: function (btn) {
        Ext.create('Ext.window.Window',{
            autoShow: true,
            modal: true,
            title: 'Add News',
            minWidth: 600,
            minHeight: 400,
            items:{
                xtype: 'executive-dashboard-new-news'
            }
        }).show();
    },

    onSaveClick:function (btn) {
        var me = this,
            newsVm = me.getViewModel(),
            newsGrid = Ext.first('news'),
            store = newsGrid.getViewModel().getStore('news'),
            today = new Date(),
            dateFormat = today.toLocaleDateString("en-US"),
            timeNow = today.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }),
            postId = store.getCount() + 1,
            newsType = me.lookupReference('newsType'),
            newsTitle = me.lookupReference('newsTitle'),
            newsDetails = me.lookupReference('newsDetails'),
            newsGroup = "All News Releases",
            newRecord,selectedRecord,modifiedRecord;

        if(newsType.getValue().rb=='forum'){
            newsGroup = "Community Forum";
        }
        if(newsVm.get('selectedRec')){
            modifiedRecord = newsVm.get('selectedRec');
            selectedRecord = store.getById(modifiedRecord.get('id'));
            modifiedRecord.set({
                title: newsTitle.getValue(),
                paragraph: newsDetails.getValue(),
                type:newsType.getValue().rb,
                group: newsGroup
            });
            selectedRecord.set(modifiedRecord.getData())
        } else {
            newRecord = {
                author:"Unknown",
                date: dateFormat,
                group:newsGroup,
                id:postId,
                image:"photo-4.png",
                paragraph:newsDetails.getValue(),
                time:timeNow,
                title:newsTitle.getValue(),
                type:newsType.getValue().rb
            };
            store.add(newRecord);
        }
        btn.up('window').close();
        Ext.Msg.alert('Success','Post saved Successfully');
        newsGrid.getView().refresh();
    }
});
