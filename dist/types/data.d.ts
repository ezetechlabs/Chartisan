/**
 * Represents the chart data.
 *
 * @export
 * @interface ChartData
 */
export interface ChartData {
    /**
     * Stores the chart labels.
     *
     * @type {string[]}
     * @memberof ChartData
     */
    labels: string[];
    /**
     * Stores the chart extra options.
     *
     * @type {*}
     * @memberof ChartData
     */
    extra: unknown;
}
/**
 * Determines if the given object satisfies ChartData.
 *
 * @export
 * @param {*} obj
 * @returns {obj is ChartData}
 */
export declare function isChartData(obj: any): obj is ChartData;
/**
 * Determine the dataset data.
 *
 * @export
 * @interface DatasetData
 */
export interface DatasetData {
    /**
     * Represents the dataset identifier.
     *
     * @type {number}
     * @memberof DatasetData
     */
    id: number;
    /**
     * Stores the dataset name.
     *
     * @type {string}
     * @memberof DatasetData
     */
    name: string;
    /**
     * Stores the dataset values.
     *
     * @type {number[]}
     * @memberof DatasetData
     */
    values: number[];
    /**
     * Determines if the values are datetime.
     *
     * @type {boolean}
     * @memberof DatasetData
     */
    isDatetime: boolean;
    /**
     * Stores the dataset extra options.
     *
     * @type {*}
     * @memberof DatasetData
     */
    extra: unknown;
}
/**
 * Determines if obj satisfies ChartData.
 *
 * @export
 * @param {*} obj
 * @returns {obj is DatasetData}
 */
export declare function isDatasetData(obj: any): obj is DatasetData;
/**
 * Represents the server data.
 *
 * @export
 * @interface ServerData
 */
export interface ServerData {
    /**
     * Stores the chart data.
     *
     * @type {ChartData}
     * @memberof ServerData
     */
    chart: ChartData;
    /**
     * Stores the datasets.
     *
     * @type {DatasetData[]}
     * @memberof ServerData
     */
    datasets: DatasetData[];
}
/**
 * Determine if the given  object satisfies ServerData.
 *
 * @export
 * @param {*} obj
 * @returns {obj is ServerData}
 */
export declare function isServerData(obj: any): obj is ServerData;