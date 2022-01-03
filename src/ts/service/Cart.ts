import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        let count: number = 0;
        this._items.forEach(item => count += item.price);
        return count;
    }

    discountPrice(discount: number): number {
        let sum: number = this.totalPrice()
        return Math.ceil(sum -= sum / 100 * discount);
    }

    deletedItem(idDel: number): void {
        this._items.forEach(item => {
            if (item.id === idDel) this._items.splice(this._items.indexOf(item), 1);
        })
    }
}