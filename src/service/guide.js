/**
 * guide(引导页)模块的数据服务
 * 1、根据父级导航id获取左侧导航列表: getGuideList
 * 2、根据左侧导航id获取相应markdown内容: getGuideItem
 */
import axios from '@/common/ajax';

/**
* @name getGuideList
* @param id
*/
export const getGuideList = (id) => {
	return axios.ajax('static/menu/children-nav.json', 'get', id);
};

/**
 * @name getGuideItem
 * @param id
 */
export const getGuideItem = (id) => {
	return axios.ajax('static/content/item.md', 'get', id);
};