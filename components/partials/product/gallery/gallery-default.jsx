import { Magnifier } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';

import Hand1 from '@/assets/images/hand1.jpg'

import Gallery1 from '@/assets/images/gallery1.jpg'
import Gallery2 from '@/assets/images/gallery2.jpg'
import Gallery3 from '@/assets/images/gallery3.jpg'
import Gallery4 from '@/assets/images/gallery4.jpg'

function GalleryDefault ( props ) {
    const {product} = props
    console.log('product in props', product)
    const image_1 = product.product.fieldData['product-details-image-one']?.url
  const { adClass = "product-gallery-vertical" } = props;
    const [ isOpen, setIsOpen ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    const [activeImage, setActiveImage] = useState(product.skus[0].fieldData['main-image'].url)

    const [imageArray, setImageArray] = useState(
        [
            {
                id:0,
                image: image_1
            },
            {
                id:1,
                image: image_1
            }
        ]
    )

    // useEffect( () => {
    //     if ( product ) {
    //         setIsOpen( false );
    //         setPhotoIndex( 0 );
    //     }
    // }, [ product ] )


    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % imageArray.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + imageArray.length - 1 ) % imageArray.length );
    }

    function openLightBox () {
        let index = parseInt( document.querySelector( ".product-main-image" ).getAttribute( "index" ) );

        if ( !index ) {
            index = 0;
        }
        setIsOpen( true );
        setPhotoIndex( index );
    }

    function closeLightBox () {
        setIsOpen( false );
    }

    function changeBgImage ( e, image, index ) {
        // let imgs = document.querySelectorAll( '.product-main-image img' );
        // for ( let i = 0; i < imgs.length; i++ ) {
        //     imgs[ i ].src = image;
        // }
        setActiveImage(image)
        setPhotoIndex(index)
        document.querySelector( '.product-image-gallery .active' ).classList.remove( 'active' );

        document.querySelector( '.product-main-image' ).setAttribute( 'index', index );
        e.currentTarget.classList.add( 'active' );
    }

    // if ( !product ) {
    //     return <div></div>
    // }

    return (
        <>
            <div className={ `product-gallery ${adClass}` }>
                <div className="row m-0">
                    <figure className="product-main-image" index="0">
                        {/* {
                            product.new ?
                                <span className="product-label label-new">New</span>
                                : ""
                        }

                        {
                            product.sale_price ?
                                <span className="product-label label-sale">Sale</span>
                                : ""
                        }

                        {
                            product.top ?
                                <span className="product-label label-top">Top</span>
                                : ""
                        }

                        {
                            !product.stock || product.stock == 0 ?
                                <span className="product-label label-out">Out of Stock</span>
                                : ""
                        } */}

                        <Magnifier
                            imageSrc={activeImage}
                            imageAlt="product"
                            largeImageSrc={activeImage} // Optional
                            dragToMove={ false }
                            mouseActivation="hover"
                            cursorStyleActive="crosshair"
                            id="product-zoom"
                            className="zoom-image position-relative overflow-hidden"
                            // width={ product.pictures[ 0 ].width }
                            // height={ product.pictures[ 0 ].height }
                            // style={ { paddingTop: `${product.pictures[ 0 ].height / product.pictures[ 0 ].width * 100}%` } }
                            style={{
                                height: "50rem",
                              }}
                        />

                        <button id="btn-product-gallery" className="btn-product-gallery" onClick={ openLightBox }>
                            <i className="icon-arrows"></i>
                        </button>
                    </figure>

                    <div id="product-zoom-gallery" className="product-image-gallery">
                        {
                            imageArray.map( ( item, index ) =>
                                <button className={ `product-gallery-item ${0 === index ? 'active' : ''}` } key={index } onClick={ e => changeBgImage( e, item.image, index ) }>
                                    <div className="img-wrapper h-100">
                                        <img src={item.image} alt="product back" />
                                    </div>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                isOpen ?
                    <LightBox
                        mainSrc={ imageArray[photoIndex].image }
                        // nextSrc={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ ( photoIndex + 1 ) % product.pictures.length ].url }
                        nextSrc={ imageArray[ ( photoIndex + 1 ) % imageArray.length ] }
                        prevSrc={ imageArray[ ( photoIndex + imageArray.length - 1 ) % imageArray.length ] }
                        onCloseRequest={ closeLightBox }
                        onMovePrevRequest={ moveNextPhoto }
                        onMoveNextRequest={ movePrevPhoto }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: 1041
                            },
                        }
                        }
                    />
                    : ''
            }
        </>
    )
}

export default React.memo( GalleryDefault );