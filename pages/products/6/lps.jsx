import styy from '../../../styles/generalPage.module.scss';

import useTranslation from 'next-translate/useTranslation';

const PcStrands = () => {
  let { t, lang } = useTranslation();
  return (
    <div className={styy.main_container}>
      <div className={styy.container}>hey</div>
    </div>
  );
};

export default PcStrands;
