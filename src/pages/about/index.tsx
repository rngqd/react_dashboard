import * as React from 'react';
import useStore from '@/store';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { convertISODate } from '@/utils/functions';
import { ArrowLeftOutlined } from '@ant-design/icons';

import style from './index.module.css'

const About: React.FC = () => {
    const { selectedNews } = useStore();
    const navigate = useNavigate();
    
    function goBack() {
        navigate(-1)
    }
    return (
        <>
            { selectedNews &&
                <div className={style['about-page']}>
                    <ArrowLeftOutlined className={style['about-page__back']} onClick={ goBack }/>
                    <LazyLoadImage className={style['about-page__img']}
                                   src={selectedNews.urlToImage}
                                   alt="Image Alt"
                                   effect="blur"
                    />
                    <a href={selectedNews.url} className={style['about-page__title']}>
                        <h1 >{selectedNews.title}</h1>
                    </a>
                        <div className={style['about-page__info']}>
                            <p className={style['about-page__author']}>{selectedNews.author}</p>
                            <p className={style['about-page__date']}>{convertISODate(selectedNews.publishedAt)}</p>
                        </div>
                   <p className={style['about-page__description']}>{selectedNews.description}</p>
                </div>
            }
        </>
    );
};

export default About;
