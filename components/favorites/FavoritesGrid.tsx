import React from 'react'
import FavoriteItem from './FavoriteItem'
import PlaceholderImg from "@/public/images/body1.jpg"

const FavoritesGrid = () => {
    return (
        <div className='grid grid-cols-3 border-y border-black/10 py-10 gap-10'>
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
            <FavoriteItem image={PlaceholderImg}
                type={"V-Neck T-Shirt"}
                name={"Embroidered Seersucker Shirt"}
                price={"$99"} />
        </div>
    )
}

export default FavoritesGrid