<template>
  <div class="card">
    <div class="wrapper">
      <div class="image-container">
        <img class="bm-img" :src="image" :alt="model" />
      </div>

      <div class="details">
        <h3 class="model-name">{{ model }}</h3>
        <p class="price">{{ price }}</p>
      </div>

      <div class="actions">
        <button class="details-btn" @click="goToProduct(id)">
          <Icon icon="mdi:eye" class="btn-icon" />
          More Details
        </button>
        <button class="delete-btn" @click="removeBookmark(id)">
          <Icon icon="mdi:delete" class="btn-icon" />
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useUsersStore } from "../../stores/users";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  props: {
    model: String,
    price: String,
    id: String,
    image: String,
  },
  methods: {
    goToProduct(id) {
      this.$router.push(`/car/${id}`);
    },
  },
  computed: {
    ...mapState(useUsersStore, {
      bookmarks: "bookmarks",
      removeBookmark: "removeBookmark",
    }),
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 938px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  gap: 24px;
}

.image-container {
  flex-shrink: 0;
}

.bm-img {
  width: 160px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.card:hover .bm-img {
  transform: scale(1.02);
}

.details {
  flex-grow: 1;
  padding: 0 20px;
  min-width: 0;
}

.model-name {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
  font-family: "Inria Sans", sans-serif;
  color: #1a1a1a;
  line-height: 1.3;
  word-wrap: break-word;
}

.price {
  font-size: 18px;
  font-weight: 600;
  color: red;
  margin: 0;
  font-family: "Inria Sans", sans-serif;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.details-btn,
.delete-btn {
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Roboto Serif", serif;
  transition: all 0.2s ease;
  min-width: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-icon {
  font-size: 16px;
}

.details-btn {
  background-color: #f8fafc;
  color: #374151;
  border: 1px solid #e5e7eb;
}

.details-btn:hover {
  background-color: #f1f5f9;
  border-color: #d1d5db;
  transform: translateY(-1px);
}

.delete-btn {
  background-color: #ef4444;
  color: #ffffff;
  border: 1px solid #dc2626;
}

.delete-btn:hover {
  background-color: #dc2626;
  border-color: #b91c1c;
  transform: translateY(-1px);
}

.details-btn:active,
.delete-btn:active {
  transform: translateY(0);
}

/* Responsive design */
@media (max-width: 640px) {
  .wrapper {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    text-align: center;
  }

  .details {
    padding: 0;
  }

  .actions {
    flex-direction: row;
    width: 100%;
    gap: 12px;
  }

  .details-btn,
  .delete-btn {
    flex: 1;
    min-width: auto;
  }

  .bm-img {
    width: 200px;
    height: 120px;
  }
}
</style>
