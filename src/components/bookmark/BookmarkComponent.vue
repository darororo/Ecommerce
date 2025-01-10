<template>
    <div class="bookmark" @click="toggleBookmark">
        <BookmarkFilled v-if="isBookmarked" />
        <BookmarkIcon v-else />
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useCarStore } from '../../stores/cars';
import BookmarkFilled from '../icons/bookmark/BookmarkFilled.vue';
import BookmarkIcon from '../icons/bookmark/BookmarkIcon.vue';
import { useUsersStore } from '../../stores/users';

export default {
    components: {
        BookmarkFilled,
        BookmarkIcon,
    },
    props: {
        car: Object,
    },
    methods: {
        toggleBookmark() {
            if (this.mapCarBookmarked[this.car.id]) {
                this.removeBookmark(this.car);
            } else {
                this.addBookmark(this.car)
            }
        }
    },
    computed: {
        ...mapState(useCarStore, {
            cars: "cars",
            imageUrl(store) {
                return store.getImageURL("cars", this.car.id, this.car.images[0])
            },
        }),
        ...mapState(useUsersStore, {
            mapCarBookmarked: "mapCarBookmarked",
            addBookmark: "addBookmark",
            removeBookmark: "removeBookmark",
            isBookmarked(store) {
                return store.isBookmarked(this.car)
            },
        })
    },
}
</script>