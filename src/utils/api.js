import request from '@/utils/request'

// 获取首页帖子列表数据
export const getTopics = data => {
    return request({
        url: '/topics',
        methods: 'get',
        params: data
    })
}

// 根据用户ID获取话题详情
export const getTopicsByID = id => {
    return request({
        url: `/topic/${id}`,
        methods: 'get'
    })
}

// 获取用户详情数据
export const getUserByName = loginName => {
    return request({
        url: `/user/${loginName}`,
        methods: 'get'
    })
}