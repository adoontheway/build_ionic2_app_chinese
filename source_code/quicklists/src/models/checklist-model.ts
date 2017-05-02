import { Observable } from 'rxjs/Observable';

export class CheckListModel {
    checklist:any;
    checklistObserver:any;
    createdDate:any;
    constructor(public title:string, public items:any[], public created:number){
        this.items = items;
        this.createdDate = new Date(created).toDateString();
        this.checklist = Observable.create(observer => {
            this.checklistObserver = observer;
        });
    }

    addItem(item):void{
        this.items.push({
            title:item,
            checked:false
        });
        this.checklistObserver.next(true);
    }

    removeItem(item):void{
        let index = this.items.indexOf(item);
        if( index > -1){
            this.items.splice(index, 1);
        }
        this.checklistObserver.next(true);
    }

    renameItem(item, title):void{
        let index = this.items.indexOf(item);

        if(index != -1){
            this.items[index].title = title;
        }
        this.checklistObserver.next(true);
    }

    setTitle(title):void{
        this.title = title;
        this.checklistObserver.next(true);
    }

    toggleItem(item):void{
        item.checked = !item.checked;
        this.checklistObserver.next(true);
    }
}