import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Eggs', 3),
        new Ingredient('Rice', 1),
        new Ingredient('Holy Basil', 2)
    ];

    constructor() { }

    ngOnInit() {
    }

}
