import {defineComponent, ref} from "vue"

export default defineComponent({
    setup() {
        const flag = ref(true)
        return () => {
           return  <div>{flag.value ? <div>true</div> : <div>false</div>}</div>
        }
    },
})