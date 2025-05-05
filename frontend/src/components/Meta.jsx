import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Eletrix',
  description: 'Vendemos os melhores produtos para seus projetos.',
  keywords: 'eletrônicos, comprar eletrônicos, comprar projetos',
};

export default Meta;
