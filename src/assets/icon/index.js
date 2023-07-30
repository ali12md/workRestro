import { ReactComponent as Arr } from './arr.svg';
import { ReactComponent as AppLogo } from './appLogo.svg';
import { ReactComponent as Care } from './care.svg';
import { ReactComponent as Beverages } from './beverages.svg';
import { ReactComponent as Clock } from './clock.svg';
// import { ReactComponent as Care } from './care.svg';
// import { ReactComponent as Care } from './care.svg';
// import { ReactComponent as Care } from './care.svg';
// import { ReactComponent as Care } from './care.svg';
// import { ReactComponent as Care } from './care.svg';
// import { ReactComponent as Care } from './care.svg';


export const MyIcon = (props) => {
    const { name, ...svgProps } = props;

    const Icons = {
        arr: <Arr {...svgProps} />,
        appLogo: <AppLogo {...svgProps} />,
        care: <Care {...svgProps} />,
        beverages: <Beverages sty {...svgProps} />,
        clock: <Clock {...svgProps} />,
        // care: <Care {...svgProps} />,
        // care: <Care {...svgProps} />,
        // care: <Care {...svgProps} />,
        // care: <Care {...svgProps} />,
        // care: <Care {...svgProps} />,
        // care: <Care {...svgProps} />,
        // care: <Care {...svgProps} />,

    }
    return Icons[name];
};