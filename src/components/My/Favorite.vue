<template>
    <a-table
            :columns="columns"
            :rowKey="record => record.login.uuid"
            :dataSource="data"
            :pagination="pagination"
            :loading="loading"
            @change="handleTableChange"
    >
        <template slot="name" slot-scope="name">
            {{name.first}} {{name.last}}
        </template>
    </a-table>
</template>
<script>
    import reqwest from 'reqwest';
    const columns = [
        {
            title: '收藏时间',
            sorter: true,
            dataIndex: 'gender',
            width: '20%',
        },
        {
            title: '.M3U8',
            dataIndex: 'name',
            sorter: true,
            scopedSlots: { customRender: 'name' },
        },
        {
            title: '操作',
            dataIndex: 'email',
            width: '20%',
        },
    ];

    export default {
        name: 'Favorite',
        mounted() {
            this.fetch();
        },
        data() {
            return {
                data: [],
                pagination: {},
                loading: false,
                columns,
            };
        },
        methods: {
            handleTableChange(pagination, filters, sorter) {
                console.log(pagination);
                const pager = { ...this.pagination };
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch({
                    results: pagination.pageSize,
                    page: pagination.current,
                    sortField: sorter.field,
                    sortOrder: sorter.order,
                    ...filters,
                });
            },
            fetch(params = {}) {
                console.log('params:', params);
                this.loading = true;
                reqwest({
                    url: 'https://randomuser.me/api',
                    method: 'get',
                    data: {
                        results: 10,
                        ...params,
                    },
                    type: 'json',
                }).then(data => {
                    const pagination = { ...this.pagination };
                    // Read total count from server
                    // pagination.total = data.totalCount;
                    pagination.total = 200;
                    this.loading = false;
                    this.data = data.results;
                    this.pagination = pagination;
                });
            },
        },
    };
</script>

<style scoped>

</style>
