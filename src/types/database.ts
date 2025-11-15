export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      portfolios: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          category: 'fashion' | 'editorial' | 'commercial' | 'runway'
          image_url: string
          featured: boolean
          order: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          category: 'fashion' | 'editorial' | 'commercial' | 'runway'
          image_url: string
          featured?: boolean
          order?: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          category?: 'fashion' | 'editorial' | 'commercial' | 'runway'
          image_url?: string
          featured?: boolean
          order?: number
        }
      }
      testimonials: {
        Row: {
          id: string
          created_at: string
          client_name: string
          client_role: string
          client_company: string
          content: string
          rating: number
          image_url: string | null
          featured: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          client_name: string
          client_role: string
          client_company: string
          content: string
          rating: number
          image_url?: string | null
          featured?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          client_name?: string
          client_role?: string
          client_company?: string
          content?: string
          rating?: number
          image_url?: string | null
          featured?: boolean
        }
      }
      blog_posts: {
        Row: {
          id: string
          created_at: string
          title: string
          slug: string
          excerpt: string
          content: string
          cover_image: string
          author: string
          published: boolean
          tags: string[]
          read_time: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          slug: string
          excerpt: string
          content: string
          cover_image: string
          author: string
          published?: boolean
          tags?: string[]
          read_time: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          slug?: string
          excerpt?: string
          content?: string
          cover_image?: string
          author?: string
          published?: boolean
          tags?: string[]
          read_time?: number
        }
      }
      bookings: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          company: string
          service_type: string
          event_date: string
          budget: string
          message: string
          status: 'pending' | 'confirmed' | 'cancelled'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          company: string
          service_type: string
          event_date: string
          budget: string
          message: string
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          company?: string
          service_type?: string
          event_date?: string
          budget?: string
          message?: string
          status?: 'pending' | 'confirmed' | 'cancelled'
        }
      }
      analytics: {
        Row: {
          id: string
          created_at: string
          page_views: number
          portfolio_views: number
          contact_submissions: number
          date: string
        }
        Insert: {
          id?: string
          created_at?: string
          page_views: number
          portfolio_views: number
          contact_submissions: number
          date: string
        }
        Update: {
          id?: string
          created_at?: string
          page_views?: number
          portfolio_views?: number
          contact_submissions?: number
          date?: string
        }
      }
    }
  }
}
