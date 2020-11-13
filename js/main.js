$( document ).ready(function() {
    var main = $( "#main" );
    var ml = genShopList( 10, 10 );
    initShopListElements( ml, "main" )
});

class ShopItem {
    constructor( name, price ) {
        this.name = name;
        this.price = price;
    }

    initElement() {
        let d = document.createElement( "div" );
        d.classList.add( "shop-card" )

        let n = document.createElement( "p" );
        $( n ).text( this.name );
        let p = document.createElement( "p" );
        $( p ).text( "$" + this.price );

        d.appendChild( n );
        d.appendChild( p );
        main.appendChild( d );
    }
}

function initShopListElements( l ) {
    for ( let i = 0; i < l.length; i++ ) {
        l[i].initElement();
    }
}

function genShopList( s, p ) {
    let l = [];
    for ( let i = 0; i < s; i++ ) {
        l.push( new ShopItem( "Item" + i, p ) )
    }
    return l;
}