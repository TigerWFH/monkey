* 初始赋值顺序：

    1、defaultProps
    
    2、reducer-initialState

    3、触发action，生成新的props

    4、createStore的initialState默认参数，会覆盖reducers默认值