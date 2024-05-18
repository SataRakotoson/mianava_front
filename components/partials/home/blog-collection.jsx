import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import PostFour from '~/components/features/posts/post-four';

import { fadeIn, blogSlider } from '~/utils/data';

function BlogCollection ( props ) {
    const { loading, posts = [] } = props;

    return (
        <section className="blog-posts pb-6">
            <div className="container">
                <h2 className="title text-center">From Our Blog</h2>

                {
                    ( loading || posts.length == 0 ) ?
                        <OwlCarousel adClass="owl-simple carousel-with-shadow cols-lg-3 cols-sm-2 cols-1" options={ blogSlider }>
                            {
                                [ 0, 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="skel-pro" key={ index }></div>
                                )
                            }
                        </OwlCarousel>
                        :
                        <OwlCarousel adClass="owl-simple carousel-with-shadow cols-lg-3 cols-sm-2 cols-1" options={ blogSlider }>
                            {

                                posts.map( ( item, index ) => (
                                    <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce
                                        key={ index }>
                                        <PostFour post={ item } />
                                    </Reveal>
                                ) )
                            }
                        </OwlCarousel>
                }
            </div>
        </section>
    );
}

export default BlogCollection;