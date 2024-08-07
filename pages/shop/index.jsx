import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import StickyBox from 'react-sticky-box';

import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';
import ShopListOne from '~/components/partials/shop/list/shop-list-one';
import Pagination from '~/components/features/pagination';
import ShopSidebarOne from '~/components/partials/shop/sidebar/shop-sidebar-one';

import withApollo from '~/server/apollo';
import { GET_PRODUCTS } from '~/server/queries';
import { scrollToPageContent } from '~/utils';
import ProtectedRoute, { withAuth } from '~/components/withAuth';
// import { products } from '@/utils/products';
import { productsWithCategory } from '@/utils/products';

function Shop() {
    const router = useRouter();
    // const type = router.query.type;
    // const type = '3cols';
    
    // const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    // const [ firstLoading, setFirstLoading ] = useState( false );
    // const [ perPage, setPerPage ] = useState( 5 );
    // const [ pageTitle, setPageTitle ] = useState( 'List' );
    const [ toggle, setToggle ] = useState( false );
    // const products = data && data.products.data;
    // const totalCount = data && data.products.totalCount;

    const [products, setProducts] = useState(productsWithCategory);
    const [originalProducts, setOriginalProducts] = useState(productsWithCategory);
    const products_mianava = productsWithCategory
    // const products_mianava = products

    // useEffect( () => {
    //     window.addEventListener( "resize", resizeHandle );
    //     resizeHandle();
    //     return () => {
    //         window.removeEventListener( "resize", resizeHandle );
    //     }
    // }, [] )

    // function resizeHandle() {
    //     if ( document.querySelector( "body" ).offsetWidth < 992 )
    //         setToggle( true );
    //     else
    //         setToggle( false );
    // }

    // useEffect( () => {
    //     getProducts( {
    //         variables: {
    //             searchTerm: query.searchTerm,
    //             color: query.color ? query.color.split( ',' ) : [],
    //             size: query.size ? query.size.split( ',' ) : [],
    //             brand: query.brand ? query.brand.split( ',' ) : [],
    //             minPrice: parseInt( query.minPrice ),
    //             maxPrice: parseInt( query.maxPrice ),
    //             category: query.category,
    //             sortBy: query.sortBy ? query.sortBy : 'default',
    //             page: query.page ? parseInt( query.page ) : 1,
    //             perPage: perPage,
    //             list: true
    //         }
    //     } );

    //     scrollToPageContent();
    // }, [ query, perPage ] )
    const query = router.query;
    useEffect(() => {
        let updatedProducts = originalProducts;
        console.log({updatedProducts})
        // console.log('CATEGORY ',updatedProducts[0].product.fieldData.category)
        if (query.category) {
            updatedProducts = updatedProducts.filter(product => {
                console.log('Product categories:', product.product.fieldData.category);
                return product.product.fieldData.category.some(cat => cat.categoryName === query.category);
            });
            setProducts(updatedProducts)
          }
        if (query.brand) {
            const selectedBrands = query.brand.split(',');
            updatedProducts = updatedProducts.filter(product =>
                selectedBrands.includes(product.product.fieldData.brand.brandName)
            );            
            setProducts(updatedProducts)
        }
        if (query.minPrice && query.maxPrice) {
            updatedProducts = updatedProducts.filter(product => product.skus[0].fieldData.price.value >= query.minPrice && product.skus[0].fieldData.price.value <= query.maxPrice);
            setProducts(updatedProducts)
        }
        scrollToPageContent();
    }, [query])

    // useEffect( () => {
    //     if ( products ) setFirstLoading( true );
    // }, [ products ] )

    // useEffect( () => {
    //     if ( type == 'list' ) {
    //         setPageTitle( 'List' );
    //         setPerPage( 5 );
    //     } else if ( type == '2cols' ) {
    //         setPageTitle( 'Grid 2 Columns' );
    //         setPerPage( 6 );
    //     } else if ( type == '3cols' ) {
    //         setPageTitle( 'Grid 3 Columns' );
    //         setPerPage( 9 );
    //     } else if ( type == '4cols' ) {
    //         setPageTitle( 'Grid 4 Columns' );
    //         setPerPage( 12 );
    //     }
    // }, [ type ] )

    // function onSortByChange( e ) {
    //     let queryObject = router.query;
    //     let url = router.pathname.replace( '[type]', query.type ) + '?';
    //     for ( let key in queryObject ) {
    //         if ( key !== "type" && key !== "sortBy" ) {
    //             url += key + '=' + queryObject[ key ] + '&';
    //         }
    //     }

    //     router.push( url + 'sortBy=' + e.target.value );
    // }

    function toggleSidebar() {
        if (
            document
                .querySelector( 'body' )
                .classList.contains( 'sidebar-filter-active' )
        ) {
            document
                .querySelector( 'body' )
                .classList.remove( 'sidebar-filter-active' );
        } else {
            document
                .querySelector( 'body' )
                .classList.add( 'sidebar-filter-active' );
        }
    }

    function hideSidebar() {
        document
            .querySelector( 'body' )
            .classList.remove( 'sidebar-filter-active' );
    }

    // if ( error ) {
    //     return <div></div>
    // }

    return (
        <main className="main shop">
            <PageHeader title='Boutique' subTitle="Mianava" />

            <div className="page-content mt-6">
                <div className="container">
                    <div className="row skeleton-body">
                        <div
                            className={ `col-lg-9 skel-shop-products ${ !true ? 'loaded' : '' }` }
                        >
                            <div className="toolbox">

                                <div className="toolbox-right">
                                    <div className="toolbox-sort">
                                        <label htmlFor="sortby">Filtrer par:</label>
                                        <div className="select-custom">
                                            <select
                                                name="sortby"
                                                id="sortby"
                                                className="form-control"
                                                // onChange={ onSortByChange }
                                                // value={ query.sortBy ? query.sortBy : 'default' }
                                            >
                                                <option value="default">Default</option>
                                                <option value="featured">Les plus populaires</option>
                                                <option value="rating">Les mieux notés</option>
                                                <option value="new">Date</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="toolbox-layout">
                                        <ALink
                                            href="/shop/sidebar/list"
                                            className={ `btn-layout ${ type == 'list' ? 'active' : '' }` }
                                            scroll={ false }
                                        >
                                            <svg width="16" height="10">
                                                <rect x="0" y="0" width="4" height="4" />
                                                <rect x="6" y="0" width="10" height="4" />
                                                <rect x="0" y="6" width="4" height="4" />
                                                <rect x="6" y="6" width="10" height="4" />
                                            </svg>
                                        </ALink>

                                        <ALink
                                            href="/shop/sidebar/2cols"
                                            className={ `btn-layout ${ type == '2cols' ? 'active' : '' }` }
                                            scroll={ false }
                                        >
                                            <svg width="10" height="10">
                                                <rect x="0" y="0" width="4" height="4" />
                                                <rect x="6" y="0" width="4" height="4" />
                                                <rect x="0" y="6" width="4" height="4" />
                                                <rect x="6" y="6" width="4" height="4" />
                                            </svg>
                                        </ALink>

                                        <ALink
                                            href="/shop/sidebar/3cols"
                                            className={ `btn-layout ${ type == '3cols' ? 'active' : '' }` }
                                            scroll={ false }
                                        >
                                            <svg width="16" height="10">
                                                <rect x="0" y="0" width="4" height="4" />
                                                <rect x="6" y="0" width="4" height="4" />
                                                <rect x="12" y="0" width="4" height="4" />
                                                <rect x="0" y="6" width="4" height="4" />
                                                <rect x="6" y="6" width="4" height="4" />
                                                <rect x="12" y="6" width="4" height="4" />
                                            </svg>
                                        </ALink>

                                        <ALink
                                            href="/shop/sidebar/4cols"
                                            className={ `btn-layout ${ type == '4cols' ? 'active' : '' }` }
                                            scroll={ false }
                                        >
                                            <svg width="22" height="10">
                                                <rect x="0" y="0" width="4" height="4" />
                                                <rect x="6" y="0" width="4" height="4" />
                                                <rect x="12" y="0" width="4" height="4" />
                                                <rect x="18" y="0" width="4" height="4" />
                                                <rect x="0" y="6" width="4" height="4" />
                                                <rect x="6" y="6" width="4" height="4" />
                                                <rect x="12" y="6" width="4" height="4" />
                                                <rect x="18" y="6" width="4" height="4" />
                                            </svg>
                                        </ALink>
                                    </div> */}
                                </div>
                            </div >

                            {/* <ShopListOne products={ products_mianava }></ShopListOne> */}
                            <ShopListOne products={ products }></ShopListOne>
                            {/* <ShopListOne products={ products } perPage={ perPage } loading={ loading }></ShopListOne> */}

                            {/* {
                                totalCount > perPage ?
                                    <Pagination perPage={ perPage } total={ totalCount }></Pagination>
                                    : ""
                            } */}
                        </div >

                        {/* <aside className={ `col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${ ( !loading || firstLoading ) ? 'loaded' : '' }` }> */}
                        <aside className={ `col-lg-3 skel-shop-sidebar order-lg-first skeleton-body loaded` }>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <div className="skel-widget"></div>
                            <StickyBox className="sticky-content" offsetTop={ 70 }>
                                <ShopSidebarOne toggle={ toggle }></ShopSidebarOne>
                            </StickyBox>
                            {
                                toggle ?
                                    <button className="sidebar-fixed-toggler" 
                                    onClick={ toggleSidebar }
                                    >
                                        <i className="icon-cog"></i>
                                    </button>
                                    : ''
                            }
                            <div className="sidebar-filter-overlay" onClick={ hideSidebar }
                            ></div>
                        </aside >
                    </div >
                </div >
            </div >
        </main >
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( withAuth(Shop)  );
// export default withAuth(Shop);