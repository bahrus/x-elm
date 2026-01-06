import {AllProps as BaseAllProps, EndUserProps as BaseEndUserProps, Actions as BaseActions} from '../css-charts/types';
import {EChartsOption} from '../../echarts';
export interface EndUserProps extends BaseEndUserProps {
    options: EChartsOption;
}

export interface AllProps extends EndUserProps, BaseAllProps {
}

export interface Actions extends BaseActions {
    hydrateECharts(self: AllProps): Promise<void>;
}

