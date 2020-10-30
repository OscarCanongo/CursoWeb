import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';

const Index = () => {

    const inicio = useInicio();

    return (  
        <Layout>
            <h1>Index</h1>
        </Layout>
    );
}
 
export default Index;