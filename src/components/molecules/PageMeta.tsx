import React from 'react'
import { Helmet } from 'react-helmet-async'
import IPageMeta from '../../types/molecules.IPageMeta'

function PageMeta(props: IPageMeta): JSX.Element {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name='description' content={props.description} />
            <meta name='keywords' content={props.keywords} />
        </Helmet>
    )
}

export default PageMeta
