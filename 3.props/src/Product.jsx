import React from 'react'

function Product({ producttName, price }) {
    return (
        <div>

            <div>ÜRÜN BİLGİLERİ</div>
            <div>
                <div>İsim: {producttName}</div>
                <div>Fiyat: {price} TL</div>
            </div>
        </div>
    )
}

export default Product
