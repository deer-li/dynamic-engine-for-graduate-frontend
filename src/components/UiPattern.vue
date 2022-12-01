<!--
<template>
    <el-select v-model="data" placeholder="请选择框架类型" @change="select">
        <el-option value="Vue"></el-option>
        <el-option value="React"></el-option>
    </el-select>
</template>

<script>
    export default {
        name: "UiPattern",
        props: ['data'],

    }

</script>

<style scoped>

</style>-->

<!--<template>
    <el-select v-model="data" placeholder="请选择框架类型" @change="select">
        <el-option value="Vue"></el-option>
        <el-option value="React"></el-option>
    </el-select>
    <div>
        <el-button v-for="(item,index) in button" :key="index">

            {{item.name}}
        </el-button>
    </div>


</template>-->
<template>
    <div>
        <el-select v-model="data" placeholder="请选择框架类型" @change="select">
            <el-option value="Vue"></el-option>
            <el-option value="React"></el-option>
        </el-select>
        <div v-if="this.button.length>0">
            <el-button v-for="(item,index) in button"  v-bind="index">
                {{item.name}}
            </el-button>
        </div>

    </div>


</template>

<script>
    export default {
        name: "UiPattern",
        props: ['data'],

        data(){
            return{
                button1:[
                    {name:1},
                    {name:2},
                    {name:3},
                    {name:4},
                ],
                button2:[
                    {name:1},
                    {name:2},
                    {name:3},
                    {name:4},
                ],
                button:[],
                buttonName:'',

            }
        },
        methods:{
            select(e){
                if (e=='vue'){
                    this.button=this.button1
                }else {
                    this.button=this.button2
                }
            }

        }
    }

</script>

<style scoped>

</style>

