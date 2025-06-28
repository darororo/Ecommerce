<template>
  <div class="car-card">
    <div class="car-image-container">
      <div v-if="car.discount" class="car-discount-tag">
        {{ car.discount }}% OFF
      </div>
      <img :src="imageUrl" alt="Car Image" class="car-image" />
      <div class="image-overlay"></div>
    </div>

    <div class="car-content">
      <div class="car-header">
        <div class="price-section">
          <template v-if="car.discount">
            <span class="price-original">{{ formatUsd(car.price) }}</span>
            <span class="price-discounted">{{
              formatUsd(discountedPrice)
            }}</span>
          </template>
          <template v-else>
            <span class="price-current">{{ formatUsd(car.price) }}</span>
          </template>
        </div>
        <BookmarkComponent :car="car" class="bookmark-btn" />
      </div>

      <h3 class="car-model">{{ car.model }}</h3>

      <p class="car-description">{{ car.description }}</p>

      <div class="car-seller">
        <SellerIcon class="seller-icon" />
        <span class="seller-name">Yem Daro</span>
      </div>

      <div class="car-actions">
        <RouterLink
          :to="{ name: 'checkout', params: { carId: car.id } }"
          class="btn-link"
        >
          <button class="btn btn-primary">Reserve Now</button>
        </RouterLink>
        <RouterLink :to="`/car/${car.id}`" class="btn-link">
          <button class="btn btn-secondary">View Details</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import SellerIcon from "@/components/icons/SellerIcon.vue";
import { mapState } from "pinia";
import { useCarStore } from "../../stores/cars";
import { useUtilStore } from "../../stores/utils";
import BookmarkComponent from "../bookmark/BookmarkComponent.vue";

export default {
  components: {
    SellerIcon,
    BookmarkComponent,
  },
  computed: {
    ...mapState(useCarStore, {
      cars: "cars",
      imageUrl(store) {
        return store.getImageURL("cars", this.car.id, this.car.images[0]);
      },
      discountedPrice(store) {
        return store.getDiscountedPrice(this.car.price, this.car.discount);
      },
    }),
    ...mapState(useUtilStore, {
      formatUsd: "formatUsd",
    }),
  },
  props: {
    car: Object,
  },
};
</script>

<style scoped>
.car-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  overflow: hidden;
  font-family: "Inria Sans", sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.car-card:hover {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.car-image-container {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.car-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.car-card:hover .car-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.1));
  pointer-events: none;
}

.car-discount-tag {
  position: absolute;
  bottom: 16px;
  right: 0;
  background: #ff6f00;
  color: #fff;
  padding: 8px 12px;
  border-radius: 7px 0 0 7px;
  font-weight: 600;
  font-size: 14px;
  z-index: 2;
}

.car-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.car-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}

.price-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.price-original {
  color: #9ca3af;
  font-size: 14px;
  text-decoration: line-through;
  font-weight: 500;
}

.price-discounted,
.price-current {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.2;
}

.price-discounted {
  color: #dc2626;
}

.bookmark-btn {
  margin-top: 4px;
}

.car-model {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  line-height: 1.3;
}

.car-description {
  font-size: 16px;
  font-weight: 200;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.car-seller {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.seller-icon {
  width: 16px;
  height: 16px;
  color: #6b7280;
}

.seller-name {
  font-size: 14px;
  color: #374151;
  font-weight: 500;
}

.car-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 8px;
}

.btn-link {
  flex: 1;
  text-decoration: none;
}

.btn {
  width: 100%;
  padding: 14px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0.3px;
}

.btn-primary {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  color: #ffffff;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #b91c1c, #991b1b);
  transform: translateY(-1px);
}

.btn-secondary {
  background: #ffffff;
  color: #374151;
  border: 2px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .car-content {
    padding: 20px;
    gap: 14px;
  }

  .car-model {
    font-size: 18px;
  }

  .price-discounted,
  .price-current {
    font-size: 20px;
  }

  .btn {
    padding: 12px 16px;
    font-size: 13px;
  }
}
</style>
