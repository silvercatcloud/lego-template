import { computed } from 'vue'
import { pick } from 'lodash-es'
import { TextComponentProps } from '../defaultProps'
const useComponentCommon = (props: Readonly<Partial<TextComponentProps>>, picks: string[]) => {
    //Partial是ts内置的工具，作用是将某个属性变为可选。
    const styleProps = computed(() => pick(props, picks))
    const handleClick = () => {
        if (props.actionType === 'url' && props.url) {
            window.location.href = props.url  //string!=underfined|string
        }
    }
    return {
        styleProps,
        handleClick
    }
}

export default useComponentCommon